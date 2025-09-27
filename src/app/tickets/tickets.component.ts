import { Component } from '@angular/core';
import { DashboardItemComponent } from '../shared/dashboard-item/dashboard-item.component';
import { NewticketComponent } from './newticket/newticket.component';
import { Ticket } from './ticket.model';
import { TicketComponent } from './ticket/ticket.component';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [DashboardItemComponent, NewticketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
})
export class TicketsComponent {
  tickets: Ticket[] = [];
  onAddTicket(ticketData: { title: string; content: string }) {
    const newTicket: Ticket = {
      id: this.tickets.length + 1,
      title: ticketData.title,
      request: ticketData.content,
      status: 'open',
    };
    this.tickets.push(newTicket);
    console.log('New ticket added:', newTicket);
  }
  onCloseTicket(ticketId: number) {
    this.tickets = this.tickets.map((t) => {
      if (t.id === ticketId) {
        return { ...t, status: 'closed' };
      }
      return t;
    });
  }
}
