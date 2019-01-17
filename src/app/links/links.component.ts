import { Component, OnInit } from '@angular/core';
import {SwgmapiService} from "../swgm/swgmapi.service";
import {Handout} from "../domain/handout";

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {
  private handouts: Handout[];

  constructor(private swgmapi: SwgmapiService) {
  }


  ngOnInit() {
    this.swgmapi.loadHandouts()
        .subscribe((handouts) => {
          this.handouts = handouts;
        })
  }

}
