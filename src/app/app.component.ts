import { Component } from '@angular/core';
import { Task } from '../models/Task';


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

	filter: any;
}
