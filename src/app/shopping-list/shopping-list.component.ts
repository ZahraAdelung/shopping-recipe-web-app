import { Component } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Component({
    selector: "app-shopping-list",
    templateUrl: "shopping-list.component.html",
    styleUrls: ["shopping-list.component.css"]
})
export class ShoppingListComponent {

    ingredients: Ingredient[] = [{ name: 'Apple', amount: 4 }, { name: 'Apple', amount: 4 }, { name: 'Apple', amount: 4 },];

    onIngredientAdded(newIngredient: Ingredient) {
        this.ingredients.push(newIngredient);
    }
}