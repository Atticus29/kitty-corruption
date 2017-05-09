import { Injectable } from '@angular/core';
import { Cat } from './cat.model';
import  { StartComponent } from './start/start.component';
@Injectable()
export class CatService {

  constructor() { }
  getCat() {
    console.log(StartComponent);
    // return StartComponent.catChampion;
  }
}
