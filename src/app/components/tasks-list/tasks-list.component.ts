import { EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/interfaces/task';
import { TodoListService } from 'src/app/services/todo-list.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {

  todoList: Array<Task> = [];
  hint: string = " ";

  constructor(private todoListService: TodoListService) { }

  ngOnInit(): void {
    this.todoList = this.todoListService.getTodoList();
    this.todoListService.taskUpdated.subscribe(() => {
      this.todoListService.getTodoList();
    })
  }

  removeTask(taskObj: Task): void {
    this.todoListService.removeTask(taskObj);
    this.todoList = this.todoListService.getTodoList();
  }

  onSelectTask(taskObj: Task): void {
    this.todoListService.taskSelected.emit(taskObj);
  }

}
