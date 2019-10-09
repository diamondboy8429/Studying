import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lear-pipe',
  templateUrl: './lear-pipe.component.html',
  styleUrls: ['./lear-pipe.component.css']
})
export class LearPipeComponent implements OnInit {
  birthday = new Date(2019, 2, 3);
  person = {name: "Khoa Pham", age: 30};
  address = '62 Làng Tăng Phú';
  constructor() { }

  ngOnInit() {
  }

}
