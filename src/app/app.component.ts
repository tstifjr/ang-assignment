import { Component, OnInit } from '@angular/core';
import { Task } from '../models/Task';
import {EventService} from './services/EventService'
import { TaskService } from './task.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
	title = 'ng-todo-assign';

	items!: Task[];

	// filter: any;

	constructor(events: EventService, private taskService: TaskService) {
		events.listen('removeTask', (task: any)=>{
			// console.log(task);
			let i = this.items.indexOf(task);
			this.items.splice(i, 1);
		})
	}

	ngOnInit(): void {
		this.taskService.getTasks().subscribe((data : any)=>{
			this.items = data
		})
	}
}
