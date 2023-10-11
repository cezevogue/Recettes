import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";
import {HttpService} from "../service/API/http.service";


@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent {

  constructor(private http: HttpService) {
  }


  recette = {
    titre: "",
    description: "",
    photo: "",
    ingredients: "",
    difficulte: 0,
    cout: 0,
    preparation: 0,
    cuisson: 0,
    etapes: ""

  }

  submit(form: NgForm) {
    // console.log(form.value);
    this.http.postData('recette', form.value).subscribe(
      {
        next: (data) => console.log(data),
        error: (err) => console.log(err),
        complete: () => console.log("process terminé")

      }
    );


  }


}
