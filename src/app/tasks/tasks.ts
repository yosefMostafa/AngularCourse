import { Component, Input } from '@angular/core';
import { TaskComponent } from './task-component/task-component';
import { NewTaskComponent } from './new-tasks/new-tasks';

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

  tasks = [
    {
      userID: 'u1',
      name: 'Task 1',
      id: 't1',
      summary: 'Learn Angular',
      time: '2024-06-01',
      done: false,
      dueDate: '2024-06-10',
    },
    {
      userID: 'u1',
      name: 'Task 2',
      id: 't2',
      summary: 'Develop App',
      time: '2024-06-05',
      done: false,
      dueDate: '2024-06-15',
    },
    {
      userID: 'u2',
      name: 'Task 3',
      id: 't3',
      summary: 'Deploy App',
      time: '2024-06-10',
      done: false,
      dueDate: '2024-06-20',
    },
  ];
  get userTasks() {
    return this.tasks.filter((task) => task.userID === this.userID);
  }
  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
  onStartAddTask() {
    this.isAdding = true;
  }
  onCancelAddTask() {
    this.isAdding = false;
  }
  onCreate(taskData: { title: string; summary: string; dueDate: string }) {
    const newTask = {
      userID: this.userID || 'u1',
      name: taskData.title,
      id: Math.random().toString(),
      summary: taskData.summary,
      time: new Date().toISOString(),
      done: false,
      dueDate: taskData.dueDate
    };
    this.tasks.push(newTask);
    this.onCancelAddTask();
  }
}
