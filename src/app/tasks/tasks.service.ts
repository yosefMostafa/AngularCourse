import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class TaskService {
  private tasks: Task[] = [
  
  ];
constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
}
  getTasks() {
    return this.tasks;
  }

  addTask(task: Task) {
    this.tasks.push(task);
    this.addToStorage();
  }
  getUserTasks(userID: string) {
    return this.tasks.filter(task => task.userID === userID);
  }

  completeTask(id: string) {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.addToStorage();
  }
  private addToStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}


