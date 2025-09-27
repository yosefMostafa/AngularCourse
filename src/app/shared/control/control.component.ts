import {
  Component,
  ElementRef,
  HostListener,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: { class: 'control', '(click)': 'onClick($event)' },
})
export class ControlComponent {
  // @HostListener('click', ['$event']) onClick(event: MouseEvent) {
  //   console.log('Control clicked:', event);
  // }
  label = input.required<string>();
  private el = inject(ElementRef);

  onClick(event: MouseEvent) {
    console.log('Control clicked:', event);
    console.log(this.el);
  }
}
