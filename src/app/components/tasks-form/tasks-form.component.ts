import { Component, OnInit } from '@angular/core';
import { TodoListService } from 'src/app/services/todo-list.service';

@Component({
  selector: 'app-tasks-form',
  templateUrl: './tasks-form.component.html',
  styleUrls: ['./tasks-form.component.scss']
})
export class TasksFormComponent implements OnInit {

  tasksList = [];
  input: any = {
    value: ''
  };
  btnLabel: string = "Adicionar tarefa";
  taskId!: number | undefined;

  constructor(private todoListService: TodoListService) { }

  ngOnInit(): void {
    this.todoListService.taskSelected.subscribe(res => {
      if(res) {
        this.input.value = res.task;
        this.taskId = res.id;
        this.btnLabel = "Editar tarefa";
      }
    })
  }

  public addTask(input: any): void {
    if(this.taskId) {
      this.todoListService.upDateTask(this.taskId, input.value);
      this.btnLabel = "Adicionar tarefa";
      this.taskId = undefined;
    }
    else {
      this.todoListService.addTask(input.value);
    }
  }

}
