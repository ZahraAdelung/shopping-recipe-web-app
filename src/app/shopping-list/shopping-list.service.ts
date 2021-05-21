import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  private itemList: Ingredient[] = [{ name: 'Apple', amount: 4 }, { name: 'Apple', amount: 4 }, { name: 'Apple', amount: 4 },];
  itemListChanged = new EventEmitter<Ingredient[]>();
  getItemList() {
    return this.itemList.slice();
  }
  addItem(newItem: Ingredient) {
    this.itemList.push(newItem);
    this.itemListChanged.emit(this.itemList.slice());
  }

  addIngListToItemList(ingredients: Ingredient[]) {
    ingredients.forEach((ingredient) => {
      if (!this.itemList.includes(ingredient)) {
        this.itemList.push(ingredient);
      }
    })
    this.itemListChanged.emit(this.itemList.slice());
  }
}
