import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Cake', 'heat the oven to 225 degree', 'https://media.amorina.se/catalog/product/cache/46afaad7e66151a88d3014857aefa26b/5/0/5037028240908-bomb-cosmetics-tvaltarta-chocolate-heaven.jpg'),
    new Recipe('blueberry cake', 'A great cake to eat ', 'https://www.dixiecrystals.com/sites/default/files/styles/recipe_image_node_full/public/recipe/Very-Blueberry-Cake-dixie.jpg?itok=P4faEunG'),
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
