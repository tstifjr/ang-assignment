import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from '../../../models/Task';
import { TaskService } from '../../task.service';

@Component({
  selector: 'add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrl: './add-task-form.component.css'
})
export class AddTaskFormComponent {
  @Output() addTask = new EventEmitter<Task>();

  newTaskText: string = '';

  constructor(private taskService: TaskService) { }
  addNewTask() {
    //add new task
    const newTask: Task = new Task(this.newTaskText)

    this.addTask.emit(newTask)
    this.newTaskText = ''
    // this.taskService.createTask(newTask).subscribe((data: any) => {
    // })
  }
}