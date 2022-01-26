import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-child-row-table',
  templateUrl: './child-row-table.component.html',
  styleUrls: ['./child-row-table.component.scss']
})
export class ChildRowTableComponent{

  @Input() data:any

  constructor() {

  }

  ngOnInit(): void {
  }

}
