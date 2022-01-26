import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header-table',
  templateUrl: './header-table.component.html',
  styleUrls: ['./header-table.component.scss']
})


export class HeaderTableComponent {
  @Output() filterStatus = new EventEmitter<0 | 1 | 2>()

  status: 0 | 1 | 2 = 0

  constructor() {
  }

  changeStatus(status: 0 | 1 | 2) {
    this.status = status;
    this.filterStatus.emit(status)
  }
}
