import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-button-wrapper',
  templateUrl: './button-wrapper.component.html',
  styleUrls: ['./button-wrapper.component.scss']
})
export class ButtonWrapperComponent implements OnInit {
  @Output() filterChanged = new EventEmitter<0 | 1 | 2>()
  filterStatus = 0;

  ngOnInit() {
  }
constructor() {}

  changeFilter(status: 0 | 1 | 2) {
    this.filterStatus = status
    this.filterChanged.emit(status)
  }

}
