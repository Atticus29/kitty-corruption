import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Cat} from '../cat.model';
import {ScenarioService} from '../scenario.service';
import {CatService} from '../cat.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  constructor(public router: Router, public scenarioService: ScenarioService, public catService: CatService) { }

  ngOnInit() {
  }

goToScenario(scenarioKey: string){
  this.router.navigate(['scenarios', scenarioKey] );
}
}
