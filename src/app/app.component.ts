import { Component } from '@angular/core';
import { Task } from '../models/Task';

const filters = [
	(item : Task) => item,
	(item : Task) => !item.isComplete,
	(item : Task) => item.isComplete,
]
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.css'
})

export class AppComponent {
	title = 'ng-todo-assign';

	items: Task[] = [
		new Task("brush teeth", true),
		new Task("eat breakfast"),
		new Task("check emails")
	]

	taskFilter: any = "0";

	// visibleItems : task[] = this.items
	get visibleItems() : Task[] {
		//getter to establish filtered list of tasks
		// let value = this.taskFilter;
		// if (value === '0'){
		// 	return this.items;
		// } else if (value === '1'){
		// 	return  this.items.filter(item => !item.isComplete)
		// } else {
		// 	return this.items.filter(item => item.isComplete)
		// }
		return this.items.filter(filters[this.taskFilter])
	}

	// filterChange(value: any) {
	// 	if (value === '0'){
	// 		this.visibleItems = this.items;
	// 	} else if (value === '1'){
	// 		this.visibleItems = this.items.filter(item => !item.isComplete)
	// 	} else {
	// 		this.visibleItems = this.items.filter(item => item.isComplete)
	// 	}
	// }
}
