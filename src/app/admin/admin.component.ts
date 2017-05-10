import { Component, OnInit } from '@angular/core';
import { ScenarioService } from '../scenario.service';
import { Scenario } from '../scenario.model';
import { Router } from '@angular/router';
import{FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: []

})
export class AdminComponent implements OnInit {
  scenarios;
  editFormShowing = false;
  selectedScenarioParent;

  constructor(public router: Router, public scenarioService: ScenarioService) { }

  ngOnInit() {
    this.scenarios = this.scenarioService.getScenarios();
  }
  showEditFormClicked(scenario: Scenario) {
    this.editFormShowing = true;
    this.selectedScenarioParent = scenario;
    console.log(this.editFormShowing);
  }
}
