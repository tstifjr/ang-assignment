import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/Task';

@Component({
  selector: 'add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrl: './add-task-form.component.css'
})
export class AddTaskFormComponent {
  @Output() addTask = new EventEmitter<Task>();
	
  newTaskText: string = '';
	
  addNewTask() {
		//add new task
    this.addTask.emit(new Task(this.newTaskText))
		this.newTaskText = ''
	}
}