import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { HofComponent } from './pages/hof/hof.component';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';
import { TierhaltungComponent } from './pages/tierhaltung/tierhaltung.component';
import { UeberUnsComponent } from './pages/ueber-uns/ueber-uns.component';

const routes: Routes = [
  {path: '', component: LandingpageComponent, pathMatch: 'full'},
  {path: 'ueber-uns', component: UeberUnsComponent},
  {path: 'hof', component: HofComponent},
  {path: 'tierhaltung', component: TierhaltungComponent}
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }