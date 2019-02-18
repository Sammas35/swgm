import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LinksComponent} from "./links/links.component";
import {GamemasterComponent} from "./gamemaster/gamemaster.component";
import {MapsComponent} from "./maps/maps.component";
import {GmMapComponent} from "./gm-map/gm-map.component";

const routes: Routes = [  { path: '', redirectTo: '/links', pathMatch: 'full' },
  { path: 'links',  component: LinksComponent },
  { path: 'maps',  component: MapsComponent },
  { path: 'gamemaster/links',  component: GamemasterComponent },
  { path: 'gamemaster/maps',  component: GmMapComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
