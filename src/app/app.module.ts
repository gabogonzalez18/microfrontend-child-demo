import { BrowserModule } from '@angular/platform-browser';
import {ApplicationRef, DoBootstrap, Injector, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {SampleModule} from './sample/sample.module';
import {createCustomElement} from '@angular/elements';
import {SampleComponent} from './sample/sample.component';
import { HomeComponent } from './home/home.component';
import { PersonalAccidentsComponent } from './modules/personal-accidents/personal-accidents.component';
import { AppRoutingModule } from './app-routing.module';
import { Module1Component } from './module1/module1.component';
import { Module2Component } from './module2/module2.component';
import { Module3Component } from './module3/module3.component';
import { Module4Component } from './module4/module4.component';

const local = false;
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonalAccidentsComponent,
    Module1Component,
    Module2Component,
    Module3Component,
    Module4Component
  ],
  imports: [
    BrowserModule,
    SampleModule,
    AppRoutingModule
  ],
  providers: [],
  entryComponents: [SampleComponent],
  bootstrap: [local ? AppComponent : []],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const micro = createCustomElement(SampleComponent, {injector: this.injector});
    customElements.define('micro-app', micro);
  }
  ngDoBootstrap(appRef: ApplicationRef): void {
  }
}
