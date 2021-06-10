import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id: number;
  imagePath: string;

  editMode = false;

  recipeForm: FormGroup;

  get ingredientsCtrls() {
    return (this.recipeForm.get('ingredients') as FormArray).controls;
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );
  }

  onSubmit() {
    this.editMode ?
      this.recipeService.updateRecipe(this.id, this.recipeForm.value) :
      this.recipeService.addRecipe(this.recipeForm.value);
    this.onNavigateAway();

  }

  onNavigateAway() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  onAddIngredient() {
    (this.recipeForm.get('ingredients') as FormArray).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      }),
    );
  }

  onDeleteIngredient(index: number) {
    (this.recipeForm.get('ingredients') as FormArray).removeAt(index);
  }

  private initForm() {
    let recipe = this.recipeService.getRecipe(this.id);
    let recipeImagePath = this.editMode ? recipe.imagePath : '';
    let recipeName = this.editMode ? recipe.name : '';
    let recipeDescription = this.editMode ? recipe.description : '';

    let recipeIngredients = new FormArray([]);
    if (this.editMode && recipe['ingredients']) {
      for (let ingredient of recipe.ingredients) {
        recipeIngredients.push(
          new FormGroup({
            name: new FormControl(ingredient.name, Validators.required),
            amount: new FormControl(ingredient.amount, [
              Validators.required,
              Validators.pattern(/^[1-9]+[0-9]*$/),
            ]),
          }),
        )
      }
    }

    this.recipeForm = new FormGroup(
      {
        imagePath: new FormControl(recipeImagePath, Validators.required),
        name: new FormControl(recipeName, Validators.required),
        description: new FormControl(recipeDescription, Validators.required),
        ingredients: recipeIngredients,
      },
    );
  }

}
