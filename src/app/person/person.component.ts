import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  @Input() name:String;
  @Input()  age:Number;
  @Output() removePerson = new EventEmitter<String>();
  constructor() { }

  ngOnInit() {
  }

  removeByClick(){
    this.removePerson.emit(this.name);
  }
}
