import { Component, Input } from "@angular/core";
import { Recipe } from "./recipe.model";

@Component({
    selector: "app-recipes",
    templateUrl: "./recipes.component.html",
})
export class RecipesComponent {

    recipeSelected: Recipe;

}


