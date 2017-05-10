import { Component, Input,  OnInit } from '@angular/core';
import { ScenarioService } from '../scenario.service';
import { AdminComponent } from '../admin/admin.component'
import {Scenario} from '../scenario.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-scenario',
  templateUrl: './edit-scenario.component.html',
  styleUrls: ['./edit-scenario.component.css']
})
export class EditScenarioComponent implements OnInit {
@Input() selectedScenario;

  constructor(public scenarioService: ScenarioService, public router: Router) { }

  ngOnInit() {
  }

  submitChangesButtonClicked(scenarioToUpdate){
    this.scenarioService.updateScenario(scenarioToUpdate);
    location.reload();
  }

}
