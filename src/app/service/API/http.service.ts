import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private client: HttpClient) { }

  postData(table:string,data: JSON): Observable<any>
  {
    return this.client.post('http://127.0.0.1/Recettes/src/app/service/API/'+table+'.php?action=create', JSON.stringify(data));

  }


}
