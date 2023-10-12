import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {RecipeFormComponent} from "./recipe-form/recipe-form.component";
import {RecipesComponent} from "./recipes/recipes.component";
import {CategoriesComponent} from "./categories/categories.component";
import {CategorieFormComponent} from "./categorie-form/categorie-form.component";

const routes: Routes =[
  {path: "", component: HomeComponent},
  {path:"formRecipe", component:RecipeFormComponent},
  {path:"formRecipe/:id", component:RecipeFormComponent},
  {path:'recipes', component: RecipesComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'formCategorie', component: CategorieFormComponent},
  {path: 'formCategorie/:id', component: CategorieFormComponent}

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
