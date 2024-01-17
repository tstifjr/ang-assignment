import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/Task';

@Component({
  selector: 'task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrl: './task-list-item.component.css'
})
export class TaskListItemComponent {
  @Input() task! : Task;
  @Input() taskText! : string;
  @Input() completed! : boolean;

  @Output() completedChange = new EventEmitter<boolean>();
  @Output() deleteTask = new EventEmitter<Task>();

  toggleCompleted() {
		//toggle checkmark and boolean value of task object
		this.completed = !this.completed
    this.completedChange.emit(this.completed)
	}

  handleDelete() {
    console.log("Delete Me!")
    this.deleteTask.emit(this.task)
  }
}
