import {Component, Input} from '@angular/core';
import {NewServiceService} from "../new-service.service";

export interface Rows {
  id: number
  parentId: number
  isActive: boolean
  balance: string
  name: string
  email: string
}

@Component({
  selector: 'app-row-table',
  templateUrl: './row-table.component.html',
  styleUrls: ['./row-table.component.scss']
})
export class RowTableComponent {
  @Input() tableItem: Rows | undefined
  @Input() children: Rows[] | undefined
  toggle = false

  constructor(private service:NewServiceService) {
  }

  toggleChildrenRow() {
    this.toggle = !this.toggle
  }
}
