import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ServerStatusComponent } from './server-status/server-status.component';
import { TrafficChartsComponent } from './traffic-charts/traffic-charts.component';
import { TicketsComponent } from './tickets/tickets.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, ServerStatusComponent,TrafficChartsComponent,TicketsComponent],
})
export class AppComponent {
 
}
