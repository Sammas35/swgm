import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {LinksComponent} from './links/links.component';
import {GamemasterComponent} from './gamemaster/gamemaster.component';
import {FormsModule} from "@angular/forms";
import {HandoutComponent} from './handout/handout.component';
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule, MatCheckboxModule, MatInputModule} from "@angular/material";
import {SocketIoConfig, SocketIoModule} from "ngx-socket-io";
import {WebsocketService} from "./websocket-service/websocket.service";
import {SwgmapiService} from "./swgm-service/swgmapi.service";
import { MapsComponent } from './maps/maps.component';


@NgModule({
    declarations: [
        AppComponent,
        LinksComponent,
        GamemasterComponent,
        HandoutComponent,
        MapsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        NoopAnimationsModule,
        MatButtonModule,
        MatInputModule,
        MatCheckboxModule,
        // SocketIoModule.forRoot(config)
    ],
    providers: [WebsocketService, SwgmapiService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
