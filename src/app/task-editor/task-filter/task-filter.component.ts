import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../../models/Task';

const filters = [
	(item : Task) => item,
	(item : Task) => !item.isComplete,
	(item : Task) => item.isComplete,
]

@Component({
  selector: 'task-filter',
  templateUrl: './task-filter.component.html',
  styleUrl: './task-filter.component.css'
})
export class TaskFilterComponent implements OnInit {
  @Input() filter: any;
  @Output() filterChange = new EventEmitter<any>();
  
	taskFilter: any = "0";

  ngOnInit(): void {
    this.updateFilter('0')
  }
  updateFilter (value :any){
    this.filter = filters[value]
    this.filterChange.emit(this.filter);
  }
}
