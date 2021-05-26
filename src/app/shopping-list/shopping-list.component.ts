import { Component, OnDestroy, OnInit } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "./shopping-list.service";
import { Subscription } from "rxjs";

@Component({
    selector: "app-shopping-list",
    templateUrl: "shopping-list.component.html",
    styleUrls: ["shopping-list.component.css"]
})
export class ShoppingListComponent implements OnInit, OnDestroy {

    items: Ingredient[];
    private subscription: Subscription;

    constructor(private shoppingListService: ShoppingListService) { }

    ngOnInit() {
        this.items = this.shoppingListService.getItemList();
        this.subscription = this.shoppingListService.itemListChanged.subscribe(
            (itemList: Ingredient[]) => {
                this.items = itemList;
            });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}