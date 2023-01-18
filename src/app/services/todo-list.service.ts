import { EventEmitter, Injectable } from '@angular/core';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  taskObj!: Task;
  id: number = 0;
  taskSelected = new EventEmitter();
  taskUpdated = new EventEmitter();

  constructor() { }

  private todoList: Array<Task> = [];

  public getTodoList(): Array<Task> {
    return this.todoList;
  }

  public addTask(task: string) {
    this.taskObj = {
      id: this.id++,
      task: task
    }
    this.todoList.push(this.taskObj);
  }

  public removeTask(task: Task): void {
    let newList = this.todoList.filter(tk => tk.id !== task.id);
    this.todoList = newList;
  }

  public upDateTask(taskId: number, description: string): void {
    this.todoList.forEach((tk, i) => {
      if(tk.id == taskId) {
        this.todoList[i].task = description;
      }
    })
  }
}
