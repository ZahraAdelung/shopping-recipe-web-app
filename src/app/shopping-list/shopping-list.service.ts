import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import * as ShoppingListActions from '../shopping-list/store/shopping-list.actions';
import * as fromShoppingList from '../shopping-list/store/shopping-list.reducer';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  private itemList: Ingredient[] = [{ name: 'Apple', amount: 4 }, { name: 'Orane', amount: 10 }, { name: 'Milk', amount: 1 },];
  itemListChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  constructor(private store: Store<fromShoppingList.AppState>) { }

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
    this.store.dispatch(new ShoppingListActions.AddItems(ingredients));
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
