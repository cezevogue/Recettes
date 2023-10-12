import { Component } from '@angular/core';
import {HttpService} from "../service/API/http.service";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  constructor(private http: HttpService) {
    this.getData();
  }


  categories: any;

  delete(id:any)
  {

    this.http.deleteData('categorie',id).subscribe(
      {
        next: (data) => console.log('ok'),
        error: (err) => console.log(err),
        complete: () => console.log("process terminé")


      });

    setTimeout(() => {
      this.getData();
    }, 1000);



  }




  getData() {
    this.http.getData('categorie').subscribe(
      {
        next: (data) => this.categories = data,
        error: (err) => console.log(err),
        complete: () => console.log("process terminé")


      });


  }
}
