import {
  Component,
  ContentChild,
  ElementRef,
  HostListener,
  contentChild,
  inject,
  input,
  ViewEncapsulation,
  AfterViewInit,
  AfterContentInit,
  afterRender,
  afterNextRender,
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
export class ControlComponent implements AfterContentInit{
  // @HostListener('click', ['$event']) onClick(event: MouseEvent) {
  //   console.log('Control clicked:', event);
  // }

  // @ContentChild('input') private control?: ElementRef<HTMLTextAreaElement | HTMLInputElement>;
  constructor() {
    afterRender(() => {
      console.log("ControlComponent rendered");
    }
    );
    afterNextRender(() => {
      console.log("ControlComponent next render");
    });
  }
  label = input.required<string>();
  private el = inject(ElementRef);

  private control = contentChild<HTMLTextAreaElement | HTMLInputElement>(
    'input'
  );
  ngAfterContentInit(): void {
    console.log(this.control());
  }
  onClick(event: MouseEvent) {
  
    console.log(this.control());
  }

}
