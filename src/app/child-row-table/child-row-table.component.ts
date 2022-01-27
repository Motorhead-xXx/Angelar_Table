import {Component, Input} from '@angular/core';
import {Row} from "../row-table/row-table.component";

@Component({
  selector: 'app-child-row-table',
  templateUrl: './child-row-table.component.html',
  styleUrls: ['./child-row-table.component.scss']
})
export class ChildRowTableComponent{

  @Input() data!:Row

  constructor() {

  }

  ngOnInit(): void {
  }

}
