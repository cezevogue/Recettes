import { Component } from '@angular/core';
import {HttpService} from "../service/API/http.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-categorie-form',
  templateUrl: './categorie-form.component.html',
  styleUrls: ['./categorie-form.component.css']
})
export class CategorieFormComponent {

  id:any;
  constructor(private http: HttpService, private router: Router, private param: ActivatedRoute) {


  }


  categorie:any = {
    id:null,
    titre: ""

  }



  submit(form: NgForm) {
    console.log(form.value);
    if (this.id==null){
      this.http.postData('categorie', form.value).subscribe(
        {
          next: (data) => console.log(data),
          error: (err) => console.log(err),
          complete: () => console.log("process terminé")

        }
      );

    }else{

      this.http.postData('categorie', form.value, this.id).subscribe(
        {
          next: (data) => console.log(data),
          error: (err) => console.log(err),
          complete: () => console.log("process terminé")

        }
      );
    }

    setTimeout(() => {
      this.router.navigate(['categories']);
    }, 1000);


  }
  ngOnInit()
  {
    this.id=this.param.snapshot.paramMap.get('id');
    this.http.getData('categorie', this.id).subscribe(
      {
        next: (data) => this.categorie=data,
        error: (err) => console.log(err),
        complete: () => console.log('terminé')


      });


  }

















}
