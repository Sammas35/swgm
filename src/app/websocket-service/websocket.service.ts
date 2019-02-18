import {Injectable} from '@angular/core';
import {Socket, SocketIoConfig} from "ngx-socket-io";

// import { map } from 'rxjs/operators';

const config: SocketIoConfig = {url: 'http://localhost:3000', options: {}};


@Injectable({
    providedIn: 'root'
})
export class WebsocketService {

    refreshPlayer;
    private socket;

    constructor() {
        this.socket = new Socket(config);
        this.refreshPlayer = this.socket.fromEvent('playerrefresh');
    }
}
