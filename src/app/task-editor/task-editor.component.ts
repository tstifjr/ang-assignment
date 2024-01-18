import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../models/Task';
import { TaskService } from '../task.service';
import { EventService } from '../services/EventService';
@Component({
  selector: 'app-task-editor',
  templateUrl: './task-editor.component.html',
  styleUrl: './task-editor.component.css'
})
export class TaskEditorComponent implements OnInit {
  tasks: Task[] = []

  constructor(events: EventService, private taskService: TaskService) {
    events.listen('removeTask', (task: any) => {
      // console.log(task);
      let i = this.tasks.indexOf(task);
      if (i >= 0) {
        console.log(i)
        this.tasks.splice(i, 1);
      }
    })
  }

  ngOnInit(): void {
    this.taskService.getAllItems().subscribe((data: any) => {
      this.tasks = data
    });
  }
}
