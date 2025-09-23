import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy';

const randomNumber = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class UserComponent {
  selectedUser = DUMMY_USERS[randomNumber];
  get imagePath() {
    return 'assets/users/' + this.selectedUser.avatar;
  }
  onSelectUser() {
    this.selectedUser =
      DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)];
  }
}
