import { Action } from "@ngrx/store";
import { Ingredient } from "src/app/shared/ingredient.model";

export const ADD_ITEM = 'ADD_ITEM';
export const ADD_ITEMS = 'ADD_ITEMS';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const START_EDIT = 'START_EDIT';
export const STOP_EDIT = 'STOP_EDIT';

export class AddItem implements Action {
    readonly type = ADD_ITEM;
    constructor(public payload: Ingredient) { }
}

export class AddItems implements Action {
    readonly type = ADD_ITEMS;
    constructor(public payload: Ingredient[]) { }
}

export class UpdateItem implements Action {
    readonly type = UPDATE_ITEM;
    constructor(public payload: Ingredient) { }
}

export class DeleteItem implements Action {
    readonly type = DELETE_ITEM;
}

export class StartEdit implements Action {
    readonly type = START_EDIT;
    constructor(public payload: number) { }
}

export class StopEdit implements Action {
    readonly type = STOP_EDIT;
}

export type ShoppingListActions =
    | AddItem
    | AddItems
    | UpdateItem
    | DeleteItem
    | StartEdit
    | StopEdit;