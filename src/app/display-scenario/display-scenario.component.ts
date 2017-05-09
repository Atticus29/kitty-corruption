import { Component, OnInit } from '@angular/core';
import {Scenario} from '../scenario.model';
import { Router } from '@angular/router';
import {ScenarioService} from '../scenario.service'
import{FirebaseListObservable} from 'angularfire2/database';
import {CatService} from '../cat.service'

@Component({
  selector: 'app-display-scenario',
  templateUrl: './display-scenario.component.html',
  styleUrls: ['./display-scenario.component.css'],
  providers: []
})
export class DisplayScenarioComponent implements OnInit {
  scenarioToDisplay;

  constructor(private router: Router, private scenarioService: ScenarioService, private catService: CatService) {
    console.log(catService.catChampion);
   }

  ngOnInit() {
    this.scenarioToDisplay = this.scenarioService.getScenarioById("0");
    this.catService.getCat();
  }

}
