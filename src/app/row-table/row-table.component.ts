import {Component, Input} from '@angular/core';
import {NewServiceService} from "../new-service.service";

export interface Row {
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
  @Input() tableItem!: Row
  @Input() children!: Row[]
  toggle = false

  constructor(private service:NewServiceService) {

  }

  ngOnInit(){
  console.log(this.children.length)
}

  toggleChildrenRow() {
    this.toggle = !this.toggle
  }
}
