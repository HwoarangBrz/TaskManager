import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TaskService, TaskClosedDirective } from './shared';
import { ListTaskComponent } from './list';
import { CreateTaskComponent } from './create';
import { EditTaskComponent } from './edit';

@NgModule({
  declarations: [
    ListTaskComponent,
    TaskClosedDirective,
    CreateTaskComponent,
    EditTaskComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    TaskService
  ]
})
export class TasksModule { }
