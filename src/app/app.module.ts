import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TeamState } from './store/state/team.state';

import { AppComponent } from './app.component';
import { KeuzeschermComponent } from './pages/keuzescherm/keuzescherm.component';
import { IntroComponent } from './pages/intro/intro.component';
import { Puzzel1Component } from './pages/puzzel1/puzzel1.component';
import { Puzzel2Component } from './pages/puzzel2/puzzel2.component';

@NgModule({
  declarations: [
    AppComponent,
    KeuzeschermComponent,
    IntroComponent,
    Puzzel1Component,
    Puzzel2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([
      TeamState
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
