import { AfterViewInit, Component, ElementRef, EventEmitter, Output, output, ViewChild, viewChild } from '@angular/core';
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
export class NewticketComponent implements AfterViewInit {
  // @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  add = output<{ title: string; content: string }>();
  ngAfterViewInit(): void {
    console.log(this.form().nativeElement);
  }
onSubmit(formData: { title: string; content: string }) {
  console.log('Form submitted', formData);
  this.add.emit({ title: formData.title, content: formData.content });
  this.form().nativeElement.reset();
}
}
