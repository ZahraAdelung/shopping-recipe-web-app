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
    items: [],
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
            const item = state.items[state.editedItemIndex];
            const updatedItem = {
                ...item,
                ...action.payload,
            };
            const updatedItems = [...state.items];
            updatedItems[state.editedItemIndex] = updatedItem;

            return {
                ...state,
                items: updatedItems,
                editedItem: null,
                editedItemIndex: -1,
            };

        case ShoppingListActions.DELETE_ITEM:
            const newItemList = [...state.items];
            newItemList.splice(state.editedItemIndex, 1);
            return {
                ...state,
                items: newItemList,
                editedItem: null,
                editedItemIndex: -1,
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

