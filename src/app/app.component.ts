import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstName: string='Deepak';
  lastName: string='Agrawal';
  name: string='';
  show:Boolean=false;

  switchVisibility(){
    if(this.name !== ""){
      this.show=!this.show;
    }
    else{
      alert("We humbly request you to enter your Name");
    }
  }
}
