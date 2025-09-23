import {
  Component,
  Input,
  input,
  computed,
  Output,
  EventEmitter,
  output,
} from '@angular/core';
import { DUMMY_USERS } from '../dummy';

// const randomNumber = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class UserComponent {
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string
  id = input.required<string>();
  avatar = input.required<string>();
  name = input.required<string>();
  // @Output() select = new EventEmitter<string>();

  select = output<string>();

  // selectedUser = signal(DUMMY_USERS[randomNumber]);
  imagePath = computed(() => 'assets/users/' + this.avatar());
  // get imagePath() {
  //   return 'assets/users/' + this.avatar;
  // }
  onSelectUser() {
    this.select.emit(this.id());
  }
}
