import { Component, Output, EventEmitter, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../tasks.service';
@Component({
  selector: 'app-new-tasks',
  imports: [FormsModule],
  templateUrl: './new-tasks.html',
  styleUrl: './new-tasks.css'
})
export class NewTaskComponent {
  @Input({ required: false }) userID?: string;
  @Output() cancel = new EventEmitter<void>();

  enteredTitle = '';  
  enteredSummary = '';  
  enteredDueDate = '';

  private taskService: TaskService = inject(TaskService);
  onCancel() {
    this.cancel.emit();
  }
  onCreateTask() {
     const newTask = {
      userID: this.userID || 'u1',
      name: this.enteredTitle,
      id: Math.random().toString(),
      summary: this.enteredSummary,
      time: new Date().toISOString(),
      done: false,
      dueDate: this.enteredDueDate
    };
    this.taskService.addTask(newTask);
    this.onCancel();
  }
}
