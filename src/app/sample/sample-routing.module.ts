import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SampleComponent } from './sample.component';

const routes: Routes = [
  {
    path: 'seguros-en-linea/seguro-accidentes-personales',
    children: [
      {
        path: 'accidents',
        loadChildren: () => import('../modules/personal-accidents/personal-accidents.module').then(m => m.PersonalAccidentsModule)
      },
    ]
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class SampleRoutingModule { }
