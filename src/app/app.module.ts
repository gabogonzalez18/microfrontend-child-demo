import { BrowserModule } from '@angular/platform-browser';
import {ApplicationRef, DoBootstrap, Injector, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {SampleModule} from './sample/sample.module';
import {createCustomElement} from '@angular/elements';
import {SampleComponent} from './sample/sample.component';
import { HomeComponent } from './home/home.component';
import { PersonalAccidentsComponent } from './modules/personal-accidents/personal-accidents.component';
import { AppRoutingModule } from './app-routing.module';

const local = false;
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonalAccidentsComponent
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
