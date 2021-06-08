import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  private itemList: Ingredient[] = [{ name: 'Apple', amount: 4 }, { name: 'Orane', amount: 10 }, { name: 'Milk', amount: 1 },];
  itemListChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  getItemList() {
    return this.itemList.slice();
  }

  getItem(index: number) {
    return this.itemList[index];
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

  updateItem(index: number, newItem: Ingredient) {
    this.itemList[index] = newItem;
    this.itemListChanged.next(this.itemList.slice());
  }

  deleteItem(index: number) {
    this.itemList.splice(index, 1);
    this.itemListChanged.next(this.itemList.slice());
  }
}
