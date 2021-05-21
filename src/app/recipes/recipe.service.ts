import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'Coffee Cake',
      'heat the oven to 225 degree',
      'https://media.amorina.se/catalog/product/cache/46afaad7e66151a88d3014857aefa26b/5/0/5037028240908-bomb-cosmetics-tvaltarta-chocolate-heaven.jpg',
      [new Ingredient('egg', 2), new Ingredient('milk', 150), new Ingredient('flour', 3), new Ingredient('chocklate', 5)]),
    new Recipe(
      'blueberry cake',
      'A great cake to eat ',
      'https://www.dixiecrystals.com/sites/default/files/styles/recipe_image_node_full/public/recipe/Very-Blueberry-Cake-dixie.jpg?itok=P4faEunG',
      [new Ingredient('butter', 60), new Ingredient('flour', 3), new Ingredient('blueberry', 100)]),
    new Recipe(
      'Caramel cake',
      'Low carb but very tasty',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/caramel_cake-5374396.jpg?quality=90&webp=true&resize=440,400',
      [new Ingredient('caramel', 13), new Ingredient('sweeteners', 90)]),
  ];

  recipeSelected = new EventEmitter<Recipe>();

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number): Recipe {
    return this.recipes[index];
  }

}
