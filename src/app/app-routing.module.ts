import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreditsComponent } from './pages/credits/credits.component';
import { IntroComponent } from './pages/intro/intro.component';
import { KeuzeschermComponent } from './pages/keuzescherm/keuzescherm.component';
import { Puzzel1Component } from './pages/puzzel1/puzzel1.component';
import { Puzzel2Component } from './pages/puzzel2/puzzel2.component';
import { Puzzel3Component } from './pages/puzzel3/puzzel3.component';

const routes: Routes = [
  { path: 'keuze', component: KeuzeschermComponent },
  { path: 'intro', component: IntroComponent },
  { path: 'puzzel1', component: Puzzel1Component },
  { path: 'puzzel2', component: Puzzel2Component },
  { path: 'puzzel3', component: Puzzel3Component },
  { path: 'credits', component: CreditsComponent },
  { path: '', redirectTo: '/keuze', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
