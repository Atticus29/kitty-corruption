import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
submitStart(catName){
  console.log(catName)
}
setCat(number: number){
  console.log(number);
}
  constructor() { }

  ngOnInit() {
  }

}
