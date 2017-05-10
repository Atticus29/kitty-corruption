import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { routing } from './app.routing';
import { DisplayScenarioComponent } from './display-scenario/display-scenario.component';
import { masterFirebaseConfig} from './api-keys';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {ScenarioService} from './scenario.service';
import {CatService} from './cat.service';
import { DisplayStatsComponent } from './display-stats/display-stats.component';
import { DisplayAttackOutcomeComponent } from './display-attack-outcome/display-attack-outcome.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    DisplayScenarioComponent,
    DisplayStatsComponent,
    DisplayAttackOutcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [ScenarioService, CatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
