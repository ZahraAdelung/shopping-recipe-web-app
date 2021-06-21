import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Recipe } from './recipe.model';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = [];

  public RecipesChanged = new BehaviorSubject<Recipe[]>(this.recipes);

  getRecipes(): Recipe[] {
    return this.recipes;
  }

  setRecipes(recipeList: Recipe[]) {
    this.recipes = recipeList;
    this.RecipesChanged.next(this.recipes);
    return this.recipes;
  }

  getRecipe(index: number): Recipe {
    return this.recipes[index];
  }

  addRecipe(newRecipe: Recipe) {
    this.recipes.push(newRecipe);
    this.RecipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.RecipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.RecipesChanged.next(this.recipes.slice());
  }

}
