import {Component, OnInit} from '@angular/core';
import {SwgmapiService} from "../swgm-service/swgmapi.service";
import {Handout} from "../domain/handout";
import {WebsocketService} from "../websocket-service/websocket.service";
import {Subscription} from "rxjs";
import {RefreshService} from "../refresh-service/refresh.service";

@Component({
    selector: 'app-links',
    templateUrl: './links.component.html',
    styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {
    private handouts: Handout[];
    private connectSubscribe: Subscription;

    // private socket: Socket;

    constructor(private swgmapi: SwgmapiService,
                private socket: WebsocketService,
                private sock : RefreshService) {
    }


    ngOnInit() {
        this.loadHandouts();


        this.sock
            .connect()
            .subscribe(()=>{
                console.log('loadHandouts mit sock');
                this.sock.refreshPlayer.subscribe(() => {
                    console.log('loadHandouts mit refresh sock');
                });
                this.loadHandouts();
            })

        // this.connectSubscribe = this.socket.connect()
        //     .subscribe((response) => {
        //         console.log('socket.connect()', response);
        //
        //     });
        // this.connectSubscribe = this.socket.connect()
        //     .subscribe((response: MessageEvent) => {
        //         console.log('socket.connect()', response.data);
        //
        //         return response.data;
        //     });
    }

    private loadHandouts() {
        this.swgmapi.loadHandouts()
            .subscribe((handouts) => {
                this.handouts = handouts;
            });
    }
}
