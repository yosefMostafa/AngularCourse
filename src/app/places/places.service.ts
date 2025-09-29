import { inject, Injectable, signal } from '@angular/core';

import { Place } from './place.model';
import { catchError, map, tap, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private httpClient = inject(HttpClient);
  private userPlaces = signal<Place[]>([]);

  loadedUserPlaces = this.userPlaces.asReadonly();

  loadAvailablePlaces() {
    return this.fetchPlaces(
      'http://localhost:3000/places',
      'Could not fetch places. Please try again later.'
    );
  }

  loadUserPlaces() {
    return this.fetchPlaces(
      'http://localhost:3000/user-places',
      'Could not fetch user places. Please try again later.'
    ).pipe(
    tap({ next: (places) => this.userPlaces.set(places || []) })
    );
  }

  addPlaceToUserPlaces(place: Place) {
    if (this.userPlaces().some(p => p.id === place.id)) {
      return throwError(() => new Error('Place is already in user places.'));
    }
    this.userPlaces.update((places) => [...places, place]);
    return this.httpClient.put('http://localhost:3000/user-places', {placeId: place.id}).pipe(
      catchError((err) => {
        this.userPlaces.update((places) => places.filter(p => p.id !== place.id));
        console.error('Error booking place:', err);
        return throwError(() => new Error('Could not book the place. Please try again later.'));
      })
    );
  }

  removeUserPlace(place: Place) {
     this.userPlaces.update((places) => places.filter(p => p.id !== place.id));
    this.httpClient.delete(
      'http://localhost:3000/user-places/' + place.id,
      { observe: 'response' }
    ).pipe(
      tap({
       
        error: (err) => {
          this.userPlaces.update((places) => [...places, place]);
          console.error('Error removing place:', err);
        }
      })
    );
  }

  private fetchPlaces(url: string, errorMessage: string) {
    return this.httpClient
      .get<{ places: Place[] }>(url, {
        observe: 'response',
        // observe: 'events',
      })
      .pipe(
        map((event) => event.body?.places),

        catchError((err) => {
          console.error('Error loading places:', err);
          return throwError(() => new Error(errorMessage));
        })
      );
  }
}
