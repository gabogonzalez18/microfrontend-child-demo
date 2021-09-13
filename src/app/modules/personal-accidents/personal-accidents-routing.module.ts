import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalAccidentsComponent } from './personal-accidents.component';

const routes: Routes = [
  {
    path: 'information',
    component: PersonalAccidentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalAccidentsRoutingModule { }
