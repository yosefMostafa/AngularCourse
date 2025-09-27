import { Component, DestroyRef, effect, inject, Input, OnDestroy, OnInit, signal } from '@angular/core';
import { DashboardItemComponent } from '../shared/dashboard-item/dashboard-item.component';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [DashboardItemComponent],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit, OnDestroy {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('unknown');
  private intervalId?: ReturnType<typeof setInterval>;
  private destroyRef = inject(DestroyRef);

  constructor() {
    effect(() => {
      console.log(this.currentStatus());
    });
  }

  ngOnInit() {
    const intervalId = setInterval(() => {
      const rnd = Math.random();

      this.currentStatus.set(
        rnd < 0.33 ? 'online' : rnd < 0.66 ? 'offline' : 'unknown'
      );
    }, 5000);

    this.destroyRef.onDestroy(() => {
      clearInterval(intervalId);
    });
  }
  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
