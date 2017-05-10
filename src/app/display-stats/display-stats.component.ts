import { Component, OnInit } from '@angular/core';
import {CatService} from '../cat.service';
import { Cat } from '../cat.model';

@Component({
  selector: 'app-display-stats',
  templateUrl: './display-stats.component.html',
  styleUrls: ['./display-stats.component.css']
})
export class DisplayStatsComponent implements OnInit {
  catToDisplay;

  constructor(private catService: CatService) { }

  ngOnInit() {
    this.catToDisplay = this.catService.catChampion;

    console.log(this.catToDisplay);
  }

}
