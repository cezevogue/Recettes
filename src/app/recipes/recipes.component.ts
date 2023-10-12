import {Component} from '@angular/core';
import {HttpService} from "../service/API/http.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {

  constructor(private http: HttpService) {
    this.getData();
  }


  recipes: any;

  getData() {
    this.http.getData('recette').subscribe(
      {
        next: (data) => this.recipes = data,
        error: (err) => console.log(err),
        complete: () => console.log("process terminé")


      });


  }
}
