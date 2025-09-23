import { Component, Input, Output,EventEmitter, inject } from '@angular/core';
import { RoundedContainer } from "../../shared/rounded-container/rounded-container";
import { DatePipe } from '@angular/common';
import { TaskService } from '../tasks.service';
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

    private taskService: TaskService = inject(TaskService);


  onComplete() {
    if (this.id) {
      this.taskService.completeTask(this.id);
    }
  }

}
