import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SampleComponent } from './sample.component';

const routes: Routes = [
  {
    path: 'seguros-en-linea/seguro-accidentes-personales',
    children: [
      {
        path: 'module1',
        loadChildren: () => import('../module1/module1.module').then(m => m.Module1Module),
      },
      {
        path: 'module2',
        loadChildren: () => import('../module2/module2.module').then(m => m.Module2Module),
      },
      {
        path: 'module3',
        loadChildren: () => import('../module3/module3.module').then(m => m.Module3Module),
      },
      {
        path: 'module4',
        loadChildren: () => import('../module4/module4.module').then(m => m.Module4Module),
      },
      {
        path: '',
        redirectTo: '',
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
