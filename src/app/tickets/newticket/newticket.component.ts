import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { ControlComponent } from '../../shared/control/control.component';

@Component({
  selector: 'app-newticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent],
  templateUrl: './newticket.component.html',
  styleUrl: './newticket.component.css'
})
export class NewticketComponent {

}
