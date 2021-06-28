import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import * as ShoppingListActions from '../store/shopping-list.actions';
import * as fromShoppingList from '../store/shopping-list.reducer';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('form') shoppingForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(
    private shoppingListService: ShoppingListService,
    private store: Store<fromShoppingList.AppState>,
  ) { }

  ngOnInit(): void {
    this.subscription = this.store.select('shoppingList').subscribe(
      stateData => {
        if (stateData.editedItemIndex > -1) {
          this.editedItemIndex = stateData.editedItemIndex;
          this.editedItem = stateData.editedItem;
          this.editMode = true;
          this.shoppingForm.setValue({
            itemName: this.editedItem.name,
            itemAmount: this.editedItem.amount,
          });
        }
        else {
          this.editMode = false;
        }
      }
    );
  }

  onSubmit() {
    let item = this.shoppingForm.value.itemName;
    let amount = this.shoppingForm.value.itemAmount;
    let newItem = new Ingredient(item, amount);
    this.editMode ?
      this.store.dispatch(new ShoppingListActions.UpdateItem({
        index: this.editedItemIndex,
        newItem: newItem,
      }))
      //this.shoppingListService.updateItem(this.editedItemIndex, newItem) 
      :
      this.store.dispatch(new ShoppingListActions.AddItem(newItem));
    // this.shoppingListService.addItem(newItem);

    this.editMode = false;
    this.shoppingForm.reset();
  }

  onDelete() {
    //this.shoppingListService.deleteItem(this.editedItemIndex);
    this.store.dispatch(new ShoppingListActions.DeleteItem(this.editedItemIndex));
    this.onClear();
  }

  onClear() {
    this.shoppingForm.reset();
    this.editMode = false;
    this.store.dispatch(new ShoppingListActions.StopEdit());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.store.dispatch(new ShoppingListActions.StopEdit());
  }

}
