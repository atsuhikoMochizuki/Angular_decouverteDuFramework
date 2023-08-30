import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input()
  public greeting = '';

  @Output()
  public emitter = new EventEmitter();

  @ngOnInit(){
    this.emitter.emit();
  }
}

