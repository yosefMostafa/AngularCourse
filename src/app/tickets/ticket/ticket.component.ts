import { Component, input, output, signal } from '@angular/core';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  data = input.required<Ticket>({alias: 'ticket'});
  close = output();

  detailsVisible = signal<boolean>(false);

  toggleDetails() {
    this.detailsVisible.set(!this.detailsVisible());
  }
  onMarkAsClosed() {
    this.close.emit();
  }
}
