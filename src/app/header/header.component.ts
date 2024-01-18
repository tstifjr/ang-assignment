import { Component, Input } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Task } from '../../models/Task';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  // @Input() items!: Task[]
  // constructor(private router: Router) { }

  // navigationExtras: NavigationExtras = {
  //   state: { items: "HHH" }
  // };

  // goToView() {
  //   console.log(this.items)
  //   console.log(this.navigationExtras)
  //   this.router.navigate(['viewPage'], this.navigationExtras)
  // }
}
