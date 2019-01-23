import { Component, OnInit } from '@angular/core';
import {SwgmapiService} from "../swgm/swgmapi.service";
import {Handout} from "../domain/handout";
import {Socket} from "ngx-socket-io";

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {
  private handouts: Handout[];

  constructor(private swgmapi: SwgmapiService, private socket: Socket) {
  }


  ngOnInit() {
    this.swgmapi.loadHandouts()
        .subscribe((handouts) => {
          this.handouts = handouts;
        })
    this.socket.on('playerrefresh', () => {
      this.swgmapi.loadHandouts()
          .subscribe((handouts) => {
            this.handouts = handouts;
          })
    });
  }

}
