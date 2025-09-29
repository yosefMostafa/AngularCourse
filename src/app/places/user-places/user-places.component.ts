import { Component, DestroyRef, inject, signal } from '@angular/core';

import { PlacesContainerComponent } from '../places-container/places-container.component';
import { PlacesComponent } from '../places.component';
import { Place } from '../place.model';
import { HttpClient } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-user-places',
  standalone: true,
  templateUrl: './user-places.component.html',
  styleUrl: './user-places.component.css',
  imports: [PlacesContainerComponent, PlacesComponent],
})
export class UserPlacesComponent {
  isFetching = signal(false);

  error = signal<string | null>(null);
  private placesService = inject(PlacesService);
  private destroyRef = inject(DestroyRef);
  places = this
    .placesService
    .loadedUserPlaces;
  ngOnInit(): void {
    this.isFetching.set(true);
    const subs = this.placesService.loadUserPlaces()
      .subscribe({
      
        error: (err) => {
          this.error.set('Could not fetch places. Please try again later.');
          console.error('Error loading places:', err);
        },
        complete: () => {
          this.isFetching.set(false);
        },
      });
    this.destroyRef.onDestroy(() => subs.unsubscribe());
  }
  onSelectPlace(place: Place) {
    this.placesService.removeUserPlace(place);
  }
}
