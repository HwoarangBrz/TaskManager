import { Component, OnInit } from '@angular/core';

import { TaskService, Task } from '../shared';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {

  tasks: Task[];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.tasks = this.listAll();
  }

  listAll(): Task[] {
    return this.taskService.listAll();
  }

  delete($event: any, task: Task): void {
    $event.preventDefault();
    if (confirm('Deseja remover a tarefa "' + task.nome + '"?'))
      this.taskService.delete(task.id);
    this.tasks = this.taskService.listAll();
  }

  updateStatus(task: Task): void {
    if (confirm('Deseja alterar o status da tarefa "' + task.nome + '"?')) {
      this.taskService.updateStatus(task.id);
      this.tasks = this.listAll();
    }
  }
  
}
