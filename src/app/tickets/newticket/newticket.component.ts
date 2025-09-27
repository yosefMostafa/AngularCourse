import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { ControlComponent } from '../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-newticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './newticket.component.html',
  styleUrl: './newticket.component.css'
})
export class NewticketComponent {
onSubmit(formData: { title: string; content: string }) {
  console.log('Form submitted', formData);
}
}
