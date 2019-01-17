import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Handout} from "../domain/handout";

@Component({
  selector: 'app-handout',
  templateUrl: './handout.component.html',
  styleUrls: ['./handout.component.scss']
})
export class HandoutComponent implements OnInit {
  @Input()
  handout: Handout;

  @Output()
  change : EventEmitter<Handout>  = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  changedHandout(handout: Handout) {
    this.change.emit(handout);
  }
}
