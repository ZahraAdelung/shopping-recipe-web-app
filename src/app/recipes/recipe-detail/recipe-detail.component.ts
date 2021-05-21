import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipeIndex: number;
  chosenRecipe: Recipe;

  constructor(
    private shoppingListSevice: ShoppingListService,
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService) { }

  ngOnInit(): void {
    //this.recipeIndex = this.route.params['id'];
    this.route.params
      .subscribe((params: Params) => {
        this.recipeIndex = +params['id'];
        this.chosenRecipe = this.recipeService.getRecipe(this.recipeIndex);
      });

  }

  addIngredientsToShoppingList() {
    this.shoppingListSevice.addIngListToItemList(this.chosenRecipe.ingredients);
  }

  onEditRecipe() {
    //There are several navigation alternatives:

    this.router.navigate(['edit'], { relativeTo: this.route });
    //this.router.navigate(['recipes', this.recipeIndex, 'edit']);
    //this.router.navigate(['../', this.recipeIndex, 'edit'], { relativeTo: this.route });
  }

}
