import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header';
import { UserComponent } from "./user/user";
import { DUMMY_USERS } from './dummy';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users = DUMMY_USERS;
  selectedUser!: typeof DUMMY_USERS[number];
  protected title = 'courseApp';

  onSelectUser(id: string) {
    console.log('selected user id: ', id);
  }
}
