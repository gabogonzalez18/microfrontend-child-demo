import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './sample.component';
import {FormsModule} from '@angular/forms';
import { PersonalAccidentsModule } from '../modules/personal-accidents/personal-accidents.module';
import { SampleRoutingModule } from './sample-routing.module';

@NgModule({
    declarations: [SampleComponent],
    exports: [
        SampleComponent,
    ],
  imports: [
    CommonModule,
    FormsModule,
    PersonalAccidentsModule,
    SampleRoutingModule
  ]
})
export class SampleModule { }
