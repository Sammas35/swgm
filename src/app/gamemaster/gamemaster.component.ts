import {Component, OnInit} from '@angular/core';
import {SwgmapiService} from "../swgm/swgmapi.service";
import {Handout} from "../domain/handout";

@Component({
    selector: 'app-gamemaster',
    templateUrl: './gamemaster.component.html',
    styleUrls: ['./gamemaster.component.scss']
})
export class GamemasterComponent implements OnInit {
    private handouts: Handout[];

    constructor(private swgmapi: SwgmapiService) {
    }

    ngOnInit() {
        this.swgmapi.loadHandouts()
            .subscribe((handouts) => {
                this.handouts = handouts;
            })
    }

    saveHandout(handout: Handout) {
        this.swgmapi.saveHandout(handout)
            .subscribe((savedHandout)=>{
                console.log('Handout Saved', savedHandout);
            });
    }
}
