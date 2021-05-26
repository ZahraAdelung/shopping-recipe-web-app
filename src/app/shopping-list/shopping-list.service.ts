import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  private itemList: Ingredient[] = [{ name: 'Apple', amount: 4 }, { name: 'Apple', amount: 4 }, { name: 'Apple', amount: 4 },];
  itemListChanged = new Subject<Ingredient[]>();
  getItemList() {
    return this.itemList.slice();
  }
  addItem(newItem: Ingredient) {
    this.itemList.push(newItem);
    this.itemListChanged.next(this.itemList.slice());
  }

  addIngListToItemList(ingredients: Ingredient[]) {
    ingredients.forEach((ingredient) => {
      if (!this.itemList.includes(ingredient)) {
        this.itemList.push(ingredient);
      }
    })
    this.itemListChanged.next(this.itemList.slice());
  }
}
