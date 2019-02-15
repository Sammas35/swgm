import {Component, OnInit} from '@angular/core';
import {SwgmapiService} from "../swgm-service/swgmapi.service";
import {Handout} from "../domain/handout";

@Component({
    selector: 'app-gamemaster',
    templateUrl: './gamemaster.component.html',
    styleUrls: ['./gamemaster.component.scss']
})
export class GamemasterComponent implements OnInit {
    protected handouts: Handout[];
    protected newHandout : Handout = new Handout();

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

    addHandout(newHandout: Handout) {
        this.swgmapi.addHandout(newHandout)
            .subscribe((newHandout) => {
                this.handouts.push(newHandout);
                this.newHandout = new Handout();
            });
    }
}
