import { Component, Input } from '@angular/core';
import { DashboardItemComponent } from '../shared/dashboard-item/dashboard-item.component';

@Component({
  selector: 'app-traffic-charts',
  standalone: true,
  imports: [DashboardItemComponent],
  templateUrl: './traffic-charts.component.html',
  styleUrl: './traffic-charts.component.css'
})
export class TrafficChartsComponent {
 dummyTrafficData = [
    {
      id: 'd1',
      value: 433,
    },
    {
      id: 'd2',
      value: 260,
    },
    {
      id: 'd3',
      value: 290,
    },
    {
      id: 'd4',
      value: 410,
    },
    {
      id: 'd5',
      value: 397,
    },
    {
      id: 'd6',
      value: 488,
    },
    {
      id: 'd47',
      value: 589,
    },
  ];
  maxTraffic = Math.max(...this.dummyTrafficData.map((data) => data.value));

}
