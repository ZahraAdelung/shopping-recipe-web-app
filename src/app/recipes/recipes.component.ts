import { OnInit } from "@angular/core";
import { Component, Input } from "@angular/core";
import { Recipe } from "./recipe.model";
import { RecipeService } from "./recipe.service";

@Component({
    selector: "app-recipes",
    templateUrl: "./recipes.component.html",
})
export class RecipesComponent implements OnInit {
    recipeSelected: Recipe;

    constructor(private recipeService: RecipeService) { }

    ngOnInit() {
        this.recipeService.recipeSelected.subscribe((recipe: Recipe) => this.recipeSelected = recipe);
    }
}


