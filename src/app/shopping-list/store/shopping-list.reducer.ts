import { Ingredient } from "src/app/shared/ingredient.model";
import * as ShoppingListActions from "./shopping-list.actions";


export interface State {
    items: Ingredient[],
    editedItem: Ingredient,
    editedItemIndex: number,
}

export interface AppState {
    shoppingList: State
}

const initialState: State = {
    items: [
        new Ingredient('Orane', 3),
        new Ingredient('Apple', 5),
        new Ingredient('butter', 150),
    ],
    editedItem: null,
    editedItemIndex: -1,
};

export function shoppingListReducer(
    state: State = initialState,
    action: ShoppingListActions.ShoppingListActions,
) {
    switch (action.type) {
        case ShoppingListActions.ADD_ITEM:
            return {
                ...state,
                items: [...state.items, action.payload]
            };

        case ShoppingListActions.ADD_ITEMS:
            return {
                ...state,
                items: [...state.items, ...action.payload]
            }

        case ShoppingListActions.UPDATE_ITEM:
            const item = state.items[action.payload.index];
            const updatedItem = {
                ...item,
                ...action.payload.newItem,
            };
            const updatedItems = [...state.items];
            updatedItems[action.payload.index] = updatedItem;

            return {
                ...state,
                items: updatedItems,
            };

        case ShoppingListActions.DELETE_ITEM:
            const newItemList = [...state.items];
            newItemList.splice(action.payload, 1);
            return {
                ...state,
                items: newItemList,
            };

        case ShoppingListActions.START_EDIT:
            return {
                ...state,
                editedItemIndex: action.payload,
                editedItem: { ...state.items[action.payload] },
            };

        case ShoppingListActions.STOP_EDIT:
            return {
                ...state,
                editedItem: null,
                editedItemIndex: -1,
            };
        default:
            return state;
    }
}

