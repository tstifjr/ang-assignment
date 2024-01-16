import { Component, Input } from '@angular/core';
import { Task } from '../../models/Task';
@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  @Input() tasks : Task[] = []

  toggleItem(item: Task) {
		//toggle checkmark and boolean value of task object
		item.isComplete = !item.isComplete
	}
}
