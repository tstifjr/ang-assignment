import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  siToggle : boolean = false;
  toggleSignIn(){
    this.siToggle = !this.siToggle
  }

  handleSubmit(){
    this.siToggle = !this.siToggle
  }
}
