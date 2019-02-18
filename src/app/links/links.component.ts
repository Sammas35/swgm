import {Component, OnDestroy, OnInit} from '@angular/core';
import {SwgmapiService} from "../swgm-service/swgmapi.service";
import {Handout} from "../domain/handout";
import {WebsocketService} from "../websocket-service/websocket.service";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-links',
    templateUrl: './links.component.html',
    styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit, OnDestroy {
    private handouts: Handout[];

    private refreshSubscription: Subscription;

    constructor(private swgmapi: SwgmapiService,
                private socket: WebsocketService) {
    }


    ngOnInit() {
        this.loadHandouts();

        this.refreshSubscription = this.socket.refreshPlayer
            .subscribe(() => {
                console.log('loadHandouts mit refresh sock');
                this.loadHandouts();
            });
    }

    private loadHandouts() {
        this.swgmapi.loadHandouts()
            .subscribe((handouts) => {
                this.handouts = handouts;
            });
    }

    ngOnDestroy(): void {
        this.refreshSubscription.unsubscribe();
    }
}
