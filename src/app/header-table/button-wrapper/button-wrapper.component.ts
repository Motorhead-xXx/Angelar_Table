import {Component} from '@angular/core';
import {NewServiceService} from "../../new-service.service";

@Component({
  selector: 'app-button-wrapper',
  templateUrl: './button-wrapper.component.html',
  styleUrls: ['./button-wrapper.component.scss']
})
export class ButtonWrapperComponent {
  filterStatus = 0;

  constructor(private service: NewServiceService) {
  }

  changeFilter(status: 0 | 1 | 2) {
    this.filterStatus = status;
    this.service.status$.next(status)
  }

}
