import { Component, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  constructor(private shoppingListService: ShoppingListService) { }


  onAdded(item: string, amount: number) {
    let newItem = new Ingredient(item, amount);
    this.shoppingListService.addItem(newItem);
  }

}
