import { Component,signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { DUMMY_USERS } from './dummy';



@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users = DUMMY_USERS;

  selectedUser = signal<{
    id: string;
    name: string;
    avatar: string;
  } | undefined>(undefined);
  protected title = 'courseApp';

  onSelectUser(id: string) {
    this.selectedUser.set(this.users.find(user => user.id === id));
  }
}
