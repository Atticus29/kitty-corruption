import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { DisplayScenarioComponent } from './display-scenario/display-scenario.component';
import { DisplayAttackOutcomeComponent} from './display-attack-outcome/display-attack-outcome.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
{
  path: '',
  component: StartComponent
},
{
  path: 'scenarios/:id',
  component: DisplayScenarioComponent
},
{
  path: 'human-attack',
  component: DisplayAttackOutcomeComponent
},
{
  path: 'admin',
  component: AdminComponent
}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
