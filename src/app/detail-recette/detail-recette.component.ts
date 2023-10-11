import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-detail-recette',
  templateUrl: './detail-recette.component.html',
  styleUrls: ['./detail-recette.component.css']
})
export class DetailRecetteComponent {


  @Input() difficulte:any;
  @Input() cout:any;
  @Input() cuisson:any;
  @Input() preparation:any;

  temps:boolean=false;
  detail:boolean=false

  affich(type:string){

    if (type=="detail")
    {
      this.detail = !this.detail;

    }else{

      this.temps = !this.temps

    }


  }




}
