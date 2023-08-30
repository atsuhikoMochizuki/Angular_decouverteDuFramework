import { Component } from '@angular/core';
import { TestService } from 'src/app/shared/services/test.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent {
 constructor(public testService:TestService){
    this.testService.count++;
    console.log(this.testService.count);

  }
}



