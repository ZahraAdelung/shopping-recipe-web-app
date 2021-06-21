import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';
import { map, tap } from 'rxjs/operators';
import { myFirebaseUrl } from './backend';

@Injectable({
    providedIn: 'root'
})
export class DataStorageService {

    //Add your firebbase url with .json end point:
    private firebaseUrl = myFirebaseUrl;

    constructor(private http: HttpClient, private recipeService: RecipeService) { }

    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        if (recipes !== []) {
            this.http.put(this.firebaseUrl, recipes).subscribe((recipes) => console.log(recipes));
        }
    }

    fetchRecipes() {
        return this.http.get<Recipe[]>(this.firebaseUrl).pipe(
            map(recipes => {
                return recipes.map(recipe => {
                    return {
                        ...recipe,
                        ingredients: recipe.ingredients ?? []
                    };
                })
            }),
            tap(recipes => {
                this.recipeService.setRecipes(recipes)
            }),
        );
    }
}