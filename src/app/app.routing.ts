
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { DisplayScenarioComponent } from './display-scenario/display-scenario.component';

const appRoutes: Routes = [
{
  path: '',
  component: StartComponent
},
{
  path: 'scenarios/:id',
  component: DisplayScenarioComponent
}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
