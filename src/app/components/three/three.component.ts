import { Component } from '@angular/core';
import { TestService } from 'src/app/shared/services/test.service';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})

export class ThreeComponent {
  constructor(public testService :TestService){
    this.testService.count++;
    console.log(this.testService.count);
  }
}