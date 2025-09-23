import { Component, Input, Output,EventEmitter } from '@angular/core';
import { RoundedContainer } from "../../shared/rounded-container/rounded-container";
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-task',
  imports: [RoundedContainer,DatePipe],
  templateUrl: './task-component.html',
  styleUrl: './task-component.css'
})
export class TaskComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: false }) id?: string;
  @Input({ required: false }) summary?: string;
  @Input({ required: false }) time?: string;
  @Input({ required: false }) done?: boolean;
  @Input({ required: false }) dueDate?: string;
  @Output() complete = new EventEmitter<string>();


  onComplete() {
    if (this.id) {
      this.complete.emit(this.id);
    }
  }

}
