import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-new-tasks',
  imports: [FormsModule],
  templateUrl: './new-tasks.html',
  styleUrl: './new-tasks.css'
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() create = new EventEmitter<{
    title: string;
    summary: string;
    dueDate: string;
  }>();
  enteredTitle = '';  
  enteredSummary = '';  
  enteredDueDate = '';
  onCancel() {
    this.cancel.emit();
  }
  onCreateTask() {
    this.create.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate
    });
  }
}
