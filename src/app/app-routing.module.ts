import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroComponent } from './components/intro/intro.component';
import { KeuzeschermComponent } from './components/keuzescherm/keuzescherm.component';

const routes: Routes = [
  { path: 'keuze', component: KeuzeschermComponent },
  { path: 'intro', component: IntroComponent },
  { path: '',   redirectTo: '/keuze', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
