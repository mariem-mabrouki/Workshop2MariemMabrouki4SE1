import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  VAR1="Bonjour 4SE1"
  VAR2="https://miro.medium.com/v2/resize:fit:512/1*FKD2Uy_Q6r6AviZA2VD4RQ.png"
  VAR3="mariem mabrouki"
  MyList=["4SE1","4SE2","4SE3"]
  Function1(){
    alert('hi')
  }
}
