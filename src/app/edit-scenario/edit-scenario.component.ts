import { Component, Input,  OnInit } from '@angular/core';
import { ScenarioService } from '../scenario.service';
import { AdminComponent } from '../admin/admin.component'
import {Scenario} from '../scenario.model';
@Component({
  selector: 'app-edit-scenario',
  templateUrl: './edit-scenario.component.html',
  styleUrls: ['./edit-scenario.component.css']
})
export class EditScenarioComponent implements OnInit {
@Input() selectedScenario;

  constructor(public scenarioService: ScenarioService) { }

  ngOnInit() {
  }

  submitChangesButtonClicked(scenarioToUpdate: Scenario){
    this.scenarioService.updateScenario(scenarioToUpdate);
  }

}
