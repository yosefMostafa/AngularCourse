import { Component, EventEmitter, Input, model, Output, output } from '@angular/core';

@Component({
  selector: 'app-rect',
  standalone: true,
  imports: [],
  templateUrl: './rect.component.html',
  styleUrl: './rect.component.css',
})
export class RectComponent {
  // Todo: Implement custom two-way binding
// @Input({required: true}) rectSize!: { width: string; height: string };
// @Output() rectSizeChange = new EventEmitter<{ width: string; height: string }>();
rectSize = model.required<{ width: string; height: string }>();

  onReset() {
    const rect = { width: '200', height: '100' };
    this.rectSize.set(rect);
  }
}
