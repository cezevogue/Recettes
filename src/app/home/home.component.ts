import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  recettes=[{
    titre:"Quiche loraine",
    description:"Tarte salée délicieuse et simple",
    photo:"https://assets.afcdn.com/recipe/20161128/28118_w2000h3000c1cx845cy3505cxb3451cyb5177.webp",
    ingredients:"-3 Oeufs<br>-200 gr Lardon<br>-1 Oignons<br>- 20cl Lait",
    difficulte:1,
    cout:1,
    tempsPrep:15,
    tempsCuisson:30,
    etapes:"Battre les oeufs. Faire rissoler les oignons avec les lardons. Verser la préparation dans le plats. Mettre au four préchauffé à thermostat 180°c "

  },
    {
      titre:"Pates carbonara",
      description:"Tarte salée délicieuse et simple",
      photo:"https://assets.afcdn.com/recipe/20161128/28118_w2000h3000c1cx845cy3505cxb3451cyb5177.webp",
      ingredients:"-3 Oeufs<br>-200 gr Lardon<br>-1 Oignons<br>- 20cl Lait",
      difficulte:1,
      cout:1,
      tempsPrep:15,
      tempsCuisson:30,
      etapes:"Battre les oeufs. Faire rissoler les oignons avec les lardons. Verser la préparation dans le plats. Mettre au four préchauffé à thermostat 180°c "

    },
    {
      titre:"Couscous royal",
      description:"Tarte salée délicieuse et simple",
      photo:"https://assets.afcdn.com/recipe/20161128/28118_w2000h3000c1cx845cy3505cxb3451cyb5177.webp",
      ingredients:"-3 Oeufs<br>-200 gr Lardon<br>-1 Oignons<br>- 20cl Lait",
      difficulte:1,
      cout:1,
      tempsPrep:15,
      tempsCuisson:30,
      etapes:"Battre les oeufs. Faire rissoler les oignons avec les lardons. Verser la préparation dans le plats. Mettre au four préchauffé à thermostat 180°c "

    }
  ];

  detail: boolean=false;
  temps: boolean=false;

  affich(type:string){

    if (type=="detail")
    {
      this.detail = !this.detail;

    }else{

      this.temps = !this.temps

    }


  }


}
