import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskListComponent } from './task-list/task-list.component';
import { AddTaskFormComponent } from './add-task-form/add-task-form.component';
import { TaskFilterComponent } from './task-filter/task-filter.component';
import { TaskListItemComponent } from './task-list-item/task-list-item.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EventService } from '.././services/EventService';
import { TaskEditorComponent } from './task-editor.component';

@NgModule({
  declarations: [
    TaskListComponent,
    AddTaskFormComponent,
    TaskFilterComponent,
    TaskListItemComponent,
    TaskEditorComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    TaskListComponent,
    AddTaskFormComponent,
    TaskFilterComponent,
    TaskListItemComponent,
    TaskEditorComponent
  ]
})
export class TaskEditorModule { }
