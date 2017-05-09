import { Injectable } from '@angular/core';
import {Scenario} from './scenario.model';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Injectable()
export class ScenarioService {
  scenarios: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.scenarios = database.list('scenarios');
 }

  getScenarios(){
    return this.scenarios;
  }



}
