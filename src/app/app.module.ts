import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { DetailRecetteComponent } from './detail-recette/detail-recette.component';
import { AppRoutingModule } from './app-routing.module';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import {RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { RecipesComponent } from './recipes/recipes.component';
import { CategorieFormComponent } from './categorie-form/categorie-form.component';
import { CategoriesComponent } from './categories/categories.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    DetailRecetteComponent,
    RecipeFormComponent,
    RecipesComponent,
    CategorieFormComponent,
    CategoriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterLink,
    FormsModule,
    HttpClientModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
