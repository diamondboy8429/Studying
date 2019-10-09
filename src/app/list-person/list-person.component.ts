import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent implements OnInit {
  arrPeople = [
    { name: 'Tèo', age: 10 },
    { name: 'Tí', age: 9 },
    { name: 'Tuân', age: 10 }
  ]; 
  constructor() { }

  ngOnInit() {
  }

}
