import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../../models/Task';
import { EventService } from '../../services/EventService';

@Component({
  selector: 'task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrl: './task-list-item.component.css'
})
export class TaskListItemComponent {
  @Input() task! : Task;

  // @Output() editedTask = new EventEmitter<Task>()
  editToggle : boolean = false
  constructor(private events: EventService){}

  toggleCompleted() {
		//toggle checkmark and boolean value of task object
		this.task.isComplete = !this.task.isComplete
	}

  removeTask() {
    console.log(`Delete ${this.task.text}`)
    this.events.emit('removeTask', this.task)
  }

  editTask() {
    //toggle view of editing task text
    this.editToggle = !this.editToggle
  }

}
