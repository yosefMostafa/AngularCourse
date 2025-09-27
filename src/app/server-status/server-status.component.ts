import { Component, DestroyRef, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { DashboardItemComponent } from '../shared/dashboard-item/dashboard-item.component';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [DashboardItemComponent],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit, OnDestroy {
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';
  private intervalId?: ReturnType<typeof setInterval>;
  private destroyRef = inject(DestroyRef);

  ngOnInit() {
    const intervalId = setInterval(() => {
      const rnd = Math.random();

      this.currentStatus =
        rnd < 0.33 ? 'online' : rnd < 0.66 ? 'offline' : 'unknown';
    }, 5000);

    this.destroyRef.onDestroy(() => {
      clearInterval(intervalId);
    });
  }
  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
