import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerComponent } from '../server/server.component';
import { BrowserModule } from '@angular/platform-browser';
import { RootRecipeBookComponent } from './root-recipe-book/root-recipe-book.component';
import { HeaderComponent } from './root-recipe-book/header/header.component';
import { RecipesComponent } from './root-recipe-book/recipes/recipes.component';
import { RecipesListComponent } from './root-recipe-book/recipes/recipes-list/recipes-list.component';
import { RecipesDetailComponent } from './root-recipe-book/recipes/recipes-detail/recipes-detail.component';
import { RecipItemComponent } from './root-recipe-book/recipes/recipes-list/recip-item/recip-item.component';
import { ShoppingListComponent } from './root-recipe-book/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './root-recipe-book/shopping-list/shopping-edit/shopping-edit.component';



@NgModule({
  declarations: [
    RootRecipeBookComponent,
    HeaderComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailComponent,
    RecipItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
  ],
  bootstrap: [RootRecipeBookComponent]
})
export class RecipeBookModule { }
