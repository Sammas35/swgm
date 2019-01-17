import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LinksComponent} from "./links/links.component";
import {GamemasterComponent} from "./gamemaster/gamemaster.component";

const routes: Routes = [  { path: '', redirectTo: '/links', pathMatch: 'full' },
  { path: 'links',  component: LinksComponent },
  { path: 'gamemaster',  component: GamemasterComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
