import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {RecipeFormComponent} from "./recipe-form/recipe-form.component";
import {RecipesComponent} from "./recipes/recipes.component";

const routes: Routes =[
  {path: "", component: HomeComponent},
  {path:"formRecipe", component:RecipeFormComponent},
  {path:"formRecipe/:id", component:RecipeFormComponent},
  {path:'recipes', component: RecipesComponent}

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
