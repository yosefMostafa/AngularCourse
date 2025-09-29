import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';

import { Place } from '../place.model';
import { PlacesComponent } from '../places.component';
import { PlacesContainerComponent } from '../places-container/places-container.component';
import { HttpClient } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-available-places',
  standalone: true,
  templateUrl: './available-places.component.html',
  styleUrl: './available-places.component.css',
  imports: [PlacesComponent, PlacesContainerComponent],
})
export class AvailablePlacesComponent implements OnInit {
  places = signal<Place[] | undefined>(undefined);
  isFetching = signal(false);
  error = signal<string | null>(null);
  private placesService = inject(PlacesService);
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.isFetching.set(true);
    const subs = this.placesService.loadAvailablePlaces().
      subscribe({
        next: (response) => {
          this.places.set(response);
        },
        error: (err) => {
          this.error.set('Could not fetch places. Please try again later.');
          console.error('Error loading places:', err);
        },
        complete: () => {
          this.isFetching.set(false);
        }
      });
    this.destroyRef.onDestroy(() => subs.unsubscribe());
  }
  onSelectPlace(place: Place) {
    const sub = this.placesService.addPlaceToUserPlaces(place)
      .subscribe({
        next: (response) => {
          console.log('Place booked successfully:', response);
        },
        error: (err) => {
          this.error.set('Could not book the place. Please try again later.');
          console.error('Error booking place:', err);
        }
      });
    this.destroyRef.onDestroy(() => sub.unsubscribe());
  }
}
