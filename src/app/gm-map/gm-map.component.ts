import {Component, OnInit} from '@angular/core';
import {Room} from "../domain/room";

@Component({
    selector: 'app-gm-map',
    templateUrl: './gm-map.component.html',
    styleUrls: ['./gm-map.component.scss']
})
export class GmMapComponent implements OnInit {
    room: Room = new Room();
    rooms = [this.room];

    x: number;
    y: number;
    path: string;

    constructor() {
    }

    ngOnInit() {
        this.x = 1;
        this.y = 1;
        this.room.start.x = this.x;
        this.room.start.y = this.y;
        this.room.path = '4,i3,i4,i3';
    }

    updateRooms() {
        this.rooms = [this.room];
    }
}
