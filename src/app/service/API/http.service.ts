import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private client: HttpClient) { }

  postData(table:string,data: JSON, id:any=null): Observable<any>
  {
    if (id==null){
      return this.client.post('http://127.0.0.1/Recettes/src/app/service/API/'+table+'.php?action=create', JSON.stringify(data));

    }else{
      return this.client.post('http://127.0.0.1/Recettes/src/app/service/API/'+table+'.php?action=edit', JSON.stringify(data));

    }


  }

  getData(table: string , id:any=null)
  {
       if (id!=null)
       {
         //console.log('coucou');
         return this.client.get('http://127.0.0.1/Recettes/src/app/service/API/'+table+'.php?action=readOne&id='+id);

       }else{

         return this.client.get('http://127.0.0.1/Recettes/src/app/service/API/'+table+'.php?action=readAll');
       }

  }


}
