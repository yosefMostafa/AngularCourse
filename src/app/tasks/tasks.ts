import { Component, Injectable, Input } from '@angular/core';
import { TaskComponent } from './task-component/task-component';
import { NewTaskComponent } from './new-tasks/new-tasks';
import {TaskService} from './tasks.service';


@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})

export class TasksComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: false }) userID?: string;
  isAdding = false;
  constructor(private taskService: TaskService) {}

  get userTasks() {
    return this.taskService.getUserTasks(this.userID || 'u1');
  }
  
  onStartAddTask() {
    this.isAdding = true;
  }
  onCancelAddTask() {
    this.isAdding = false;
  }
  
}
