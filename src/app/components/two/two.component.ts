import { Component } from '@angular/core';
import { TestService } from 'src/app/shared/services/test.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css'],
  providers:[TestService]     /* <============*/
})
export class TwoComponent {
 
  /* cette notation propre à TypeScript, 
  permet de directement décrire un attribut de classe,g
  et de l'invoquer pour l'instanciation de l'objet*/
  constructor(public testService :TestService){
    this.testService.count++;
    console.log(this.testService.count);

  } 
}
