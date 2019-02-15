import {Injectable} from '@angular/core';
import * as io from 'socket.io-client';
import {Observable, Subject} from "rxjs";
import {ConfigService} from "../config/config.service";
import {map} from "rxjs/operators";

// import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class WebsocketService {

    refreshPlayer;
    private socket;

    constructor(private config: ConfigService) {
    }

    connect() {
        return this.config.getBackendUrl()
            .pipe(
                map((url: string) => {
                    this.socket = io(url);

                    // this.refreshPlayer = this.socket.fromEvent('playerrefresh');

                    return 'playerrefresh';
                }));
                //     // If you aren't familiar with environment variables then
                //     // you can hard code `environment.ws_url` as `http://localhost:5000`
                //     this.socket = io(url);
                //
                //     // We define our observable which will observe any incoming messages
                //     // from our socket.io server.
                //     let observable = new Observable(observer => {
                //         this.socket.on('playerrefresh', (data) => {
                //             console.log("Received message from Websocket Server")
                //             observer.next(data);
                //         })
                //         this.socket.on('message', (data) => {
                //             console.log("Received message from Websocket Server")
                //             observer.next(data);
                //         })
                //         return () => {
                //             this.socket.disconnect();
                //         }
                //     });
                //
                //     // We define our Observer which will listen to messages
                //     // from our other components and send messages back to our
                //     // socket server whenever the `next()` method is called.
                //     let observer = {
                //         next: (data: Object) => {
                //             this.socket.emit('message', JSON.stringify(data));
                //         },
                //     };
                //
                //     // we return our Rx.Subject which is a combination
                //     // of both an observer and observable.
                //     return Subject.create(observer, observable);
                // }));
    }
    // connect(): Observable<any> {
        // console.log('WebsocketService connected');
        // return this.config.getBackendUrl()
        //     .pipe(
        //         map((url: string) => {
        //             console.log('foudn url ', url);
        //             this.socket = io(url);
        //
        //             let observable = new Observable(observer => {
        //                 this.socket.on('playerrefresh', (data) => {
        //                     console.log('received playerrefresh from server');
        //                     observer.next(data);
        //                 });
        //
        //                 return () => {
        //                     console.log('WebSocket disconnected');
        //                     this.socket.disconnect();
        //                 }
        //             });
        //
        //             return observable;
        //         })
        //     );

}
