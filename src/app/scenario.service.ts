import { Injectable } from '@angular/core';
import {Scenario} from './scenario.model';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Injectable()
export class ScenarioService {
  scenarios: FirebaseListObservable<any[]>;

  constructor(public database: AngularFireDatabase) {
    this.scenarios = database.list('scenarios');
 }

  getScenarios(){
    return this.scenarios;
  }
getScenarioById(id: string){
  return this.database.object('scenarios/' + id);
}

updateScenario(scenario: Scenario){
  let scenarioInFirebase = this.getScenarioById(scenario.$key);
  scenarioInFirebase.update({title: scenario.title,
                            description: scenario.description,
                            optionOne: scenario.optionOne,
                            optionTwo: scenario.optionTwo,
                            optionThree: scenario.optionThree,
                            image: scenario.imageURL});
}


}
