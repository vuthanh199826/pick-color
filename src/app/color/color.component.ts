import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  arr = [1, 2, 3];
  result: string;

  constructor() {
  }

  ngOnInit() {
    document.getElementById('color').style.backgroundColor = 'red';
  }
  fun1() {
    this.result = document.getElementById('pick').value;
    switch (this.result) {
      case '1':
        document.getElementById('color').style.backgroundColor = 'red';
        break;
      case '2':
        document.getElementById('color').style.backgroundColor = 'black';
        break;
      case '3':
        document.getElementById('color').style.backgroundColor = 'green';
        break;
    }
  }

}
