import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';

@Component({
  selector: 'app-newticket',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './newticket.component.html',
  styleUrl: './newticket.component.css'
})
export class NewticketComponent {

}
