import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
  export class ParentComponent {
    test(event:string){
      console.log("L'enfant vient d'emettre le message",event.value);
    }
  }
