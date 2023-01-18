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

  constructor(private todoListService: TodoListService) { }

  ngOnInit(): void {
    this.todoList = this.todoListService.getTodoList();
  }

  removeTask(taskObj: Task): void {
    this.todoListService.removeTask(taskObj);
    this.todoList = this.todoListService.getTodoList();
  }

}
