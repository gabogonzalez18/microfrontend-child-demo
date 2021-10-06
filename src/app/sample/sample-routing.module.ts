import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanActivateState } from '../guard/can-activate-state';
import { SampleComponent } from './sample.component';

const routes: Routes = [
  {
    path: 'seguros-en-linea/seguro-accidentes-personales',
    children: [
      {
        path: 'module1',
        loadChildren: () => import('../module1/module1.module').then(m => m.Module1Module),
        // canActivate: [CanActivateState]
      },
      {
        path: 'module2',
        loadChildren: () => import('../module2/module2.module').then(m => m.Module2Module),
        // canActivate: [CanActivateState]
      },
      {
        path: 'module3',
        loadChildren: () => import('../module3/module3.module').then(m => m.Module3Module),
        // canActivate: [CanActivateState]
      },
      {
        path: 'module4',
        loadChildren: () => import('../module4/module4.module').then(m => m.Module4Module),
        // canActivate: [CanActivateState]
      },
      {
        path: 'accidents',
        loadChildren: () => import('../modules/personal-accidents/personal-accidents.module').then(m => m.PersonalAccidentsModule),
        // canActivate: [CanActivateState]
      },
      {
        path: '',
        redirectTo: 'seguros-en-linea/seguro-accidentes-personales',
        pathMatch: 'full',
      }
    ]
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SampleRoutingModule { }
