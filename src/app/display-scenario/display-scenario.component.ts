import { Component, OnInit } from '@angular/core';
import {Scenario} from '../scenario.model';
import { Router } from '@angular/router';
import {ScenarioService} from '../scenario.service'
import{FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'app-display-scenario',
  templateUrl: './display-scenario.component.html',
  styleUrls: ['./display-scenario.component.css'],
  providers: [ScenarioService]
})
export class DisplayScenarioComponent implements OnInit {
  scenarioToDisplay;

  constructor(private router: Router, private scenarioService: ScenarioService) { }

  ngOnInit() {
    this.scenarioToDisplay = this.scenarioService.getScenarioById("0");
  }

}
