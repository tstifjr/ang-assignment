import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  contact : string = "123 - 456 - 789"
  email : string = "abc@def.com"
  address: string = "123 abc st, VA, 99909"
}
