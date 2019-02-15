import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Room} from "../domain/room";
import {Painter} from "./painter";

@Component({
    selector: 'app-maps',
    templateUrl: './maps.component.html',
    styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

    rooms: Room[];

    @ViewChild('myCanvas')
    canvasRef: ElementRef;

    constructor() {

    }

    ngOnInit() {
        let ctx;
        let painter;

        this.rooms = this.loadRooms();

        this.canvasRef.nativeElement.width = window.innerWidth;
        this.canvasRef.nativeElement.height = window.innerHeight;

        ctx = this.getContext();
        painter = new Painter(ctx);

        ctx.beginPath();

        this.rooms.forEach(room => {
            painter.paintRoom(room);
        });
    }

    private getContext() {
        let ctx: CanvasRenderingContext2D;

        ctx = this.canvasRef.nativeElement.getContext('2d');

        return ctx;
    }

    private loadRooms() {
        return [
            {
                start: {x: 1, y: 1},
                path: "5,i3,i3,t71,1,i3"
            },
            {
                start: {x: 1, y: 4},
                path: "1,t71,3,i1,t11,1,i5,i3"
            },
            {
                start: {x: 10, y: 1},
                path: "1,t11,1,t21,1,t31,1,t41,1,t51,1,t61,1,t71" +
                    ",i1,t11,1,t21,1,t31,1,t41,1,t51,1,t61,1,t71" +
                    ",i1,t11,1,t21,1,t31,1,t41,1,t51,1,t61,1,t71" +
                    ",i1,t11,1,t21,1,t31,1,t41,1,t51,1,t61,1,t71"
            },
            // {
            //     start: {x: 7, y: 5},
            //     path: "4,i3,i2,t1,1,i3"
            // },
        ];
    }
}
