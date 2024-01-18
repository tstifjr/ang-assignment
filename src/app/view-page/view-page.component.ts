import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../models/Task';
import { TaskService } from '../task.service';
@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrl: './view-page.component.css'
})
export class ViewPageComponent implements OnInit {
  tasks: Task[] = []

  constructor(private store : TaskService){} 
  
  ngOnInit(): void{
    this.store.getAllItems().subscribe(items => {
      this.tasks = items
    })
  }
}
