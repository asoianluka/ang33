import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [FormsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  title =""

  userName =""
  userName2=""
  showInputText(){
    this.userName2 = this.userName
  }

  showText(){
    this.title =="" ? this.title = "first Event click" : this.title =""
  }
}
