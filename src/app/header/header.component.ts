import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  title = ""
  showText(){
    this.title == "" ? this.title = "First Event Click" : this.title =""
  }
}
