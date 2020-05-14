import { Component, OnInit, ViewChild } from '@angular/core';

import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { TaskService, Task } from '../shared';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  @ViewChild('formTarefa', { static: true }) formTarefa: NgForm;
  task: Task;

  constructor(
    private taskService: TaskService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.task = new Task();
  }

  create(): void {
    if (this.formTarefa.form.valid) {
  	  this.taskService.createTask(this.task);
  	  this.router.navigate(["/tasks"]);
    }
  } 

}
