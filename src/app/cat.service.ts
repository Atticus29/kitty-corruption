import { Injectable } from '@angular/core';
import { Cat } from './cat.model';
import  { StartComponent } from './start/start.component';

@Injectable()
export class CatService {

  constructor() {
    // console.log(StartComponent);
   }
   catChampion: Cat = null;
   catId: number = null;

   submitStart(catName){
     let newCat = null;
     if(this.catId===1){
       newCat = new Cat("Lucifer", catName, 0, 7,7, "https://www.demilked.com/magazine/wp-content/uploads/2016/08/biggest-maine-coon-cat-photography-robert-sijka-thumb640.jpg");
     }else if (this.catId===2){
       newCat = new Cat("Puff", catName, 10, 2,2, "https://i.ytimg.com/vi/kBftA3M7Hck/maxresdefault.jpg");
     } else if (this.catId===3){
       newCat = new Cat("UggLee", catName, 5, 5,4, "https://c1.staticflickr.com/3/2221/1574487620_2d7f46e28c_b.jpg");
     } else{
       alert("Select your Champion before beginning!");
     }
     this.catChampion = newCat;
   }

   setCat(number: number){
     this.catId = number;
   }

   getCat() {
   }
}
