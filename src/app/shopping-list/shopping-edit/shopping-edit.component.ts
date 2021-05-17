import { Component, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  @Output() onItemAdded = new EventEmitter<Ingredient>();


  onAdded(item: string, amount: number) {
    let newItem = new Ingredient(item, amount);
    this.onItemAdded.emit(newItem);
  }

}
