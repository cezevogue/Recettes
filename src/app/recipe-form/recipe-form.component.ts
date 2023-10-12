import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";
import {HttpService} from "../service/API/http.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent {
  id:any;
  constructor(private http: HttpService, private router: Router, private param: ActivatedRoute) {


  }


  recette:any = {
    id:null,
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
     console.log(form.value);
     if (this.id==null){
       this.http.postData('recette', form.value).subscribe(
         {
           next: (data) => console.log(data),
           error: (err) => console.log(err),
           complete: () => console.log("process terminé")

         }
       );

     }else{

       this.http.postData('recette', form.value, this.id).subscribe(
         {
           next: (data) => console.log(data),
           error: (err) => console.log(err),
           complete: () => console.log("process terminé")

         }
       );
     }

    this.router.navigate(['recipes']);

  }
  ngOnInit()
  {
    this.id=this.param.snapshot.paramMap.get('id');
    this.http.getData('recette', this.id).subscribe(
      {
        next: (data) => this.recette=data,
        error: (err) => console.log(err),
        complete: () => console.log('terminé')


      });


  }


}
