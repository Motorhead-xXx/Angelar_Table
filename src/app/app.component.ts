import {Component, OnInit} from '@angular/core';
import {NewServiceService} from "./new-service.service";
import {arrayTable} from "../jsonArray/arrayTable"
import {Row} from "./row-table/row-table.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public tableArr:Row[]
  public parentsArray: Row[] = []

  constructor(private service: NewServiceService) {
    this.tableArr = arrayTable
  }

  ngOnInit() {
    this.service.status$.subscribe((statusFilter) => {
      switch (statusFilter) {
            case 1:
              return this.parentsArray = arrayTable.filter(f => f.isActive)
            case 2:
              return this.parentsArray = arrayTable.filter(f => !f.isActive)
            default:
              return this.parentsArray = arrayTable
          }
    })
  }


  getChildren(parentId: number) {
    return this.tableArr.filter(f => f.parentId === parentId)
  }
}
