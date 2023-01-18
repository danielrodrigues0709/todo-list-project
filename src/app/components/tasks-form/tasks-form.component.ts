import { Component, OnInit } from '@angular/core';
import { TodoListService } from 'src/app/services/todo-list.service';

@Component({
  selector: 'app-tasks-form',
  templateUrl: './tasks-form.component.html',
  styleUrls: ['./tasks-form.component.scss']
})
export class TasksFormComponent implements OnInit {

  tasksList = [];

  constructor(private todoListService: TodoListService) { }

  ngOnInit(): void {
  }

  public addTask(input: any): void {
    this.todoListService.addTask(input.value);
  }

}
