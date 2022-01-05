import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipesList: Recipe[] = [
    new Recipe('Chicken Biryani', 'A rice item', 'https://butteroverbae.com/wp-content/uploads/2020/10/karachi-chicken-biryani-11-735x735.jpg'),
    new Recipe('Chicken Biryani', 'A rice item', 'https://butteroverbae.com/wp-content/uploads/2020/10/karachi-chicken-biryani-11-735x735.jpg'),
    new Recipe('Chicken Biryani', 'A rice item', 'https://butteroverbae.com/wp-content/uploads/2020/10/karachi-chicken-biryani-11-735x735.jpg')
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
