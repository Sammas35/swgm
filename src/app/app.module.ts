import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { LinksComponent } from './links/links.component';
import { GamemasterComponent } from './gamemaster/gamemaster.component';
import {FormsModule} from "@angular/forms";
import { HandoutComponent } from './handout/handout.component';

@NgModule({
    declarations: [
        AppComponent,
        LinksComponent,
        GamemasterComponent,
        HandoutComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
