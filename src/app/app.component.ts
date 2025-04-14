import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from "./footer/footer.component";
import { MainComponent } from "./main/main.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ang3';


  // userName1 = "John wick"
  // userGmail1 = "babaYaga@gmail.com"
  // userAge1 = 48

  // userName2 = ""
  // userGmail2 = ""
  // userAge2! : number

  // sendData(){
  //   this.userName2 = this.userName1
  //   this.userGmail2 = this.userGmail1
  //   this.userAge2 = this.userAge1
  // }

}
