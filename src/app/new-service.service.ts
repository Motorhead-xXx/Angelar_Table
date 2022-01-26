import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

// export interface TableElement {
//   id: number
//   parentId: number
//   isActive: boolean
//   balance: string
//   name: string
//   email: string
// }

@Injectable({
  providedIn: 'root'
})

export class NewServiceService {

  constructor(private http: HttpClient) {

  }

}
