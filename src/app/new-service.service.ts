import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class NewServiceService {
  status$ = new BehaviorSubject(0)
  constructor() {
  }
}
