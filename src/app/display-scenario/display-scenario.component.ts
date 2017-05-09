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
   }

  ngOnInit() {
    this.scenarioToDisplay = this.scenarioService.getScenarioById("0");
    this.catService.getCat();
  }

  optionSelected(number: number){
    let scenarioKeyToQuery = this.catService.catChampion.currentScenarioKey;
    let currentUpdateArray = null;
    // : number[];
    if(number ===1){
      this.scenarioService.getScenarioById(scenarioKeyToQuery).subscribe(results=>{
          currentUpdateArray = results.optionOnePoints;
          this.catService.catChampion.updateStats(currentUpdateArray);
      })
    }
  }

}
