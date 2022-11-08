import {TodoItem} from "../models";
import {createReducer, on} from "@ngrx/store";
import {setNewItem} from "./todo-list.actions";

export interface TodoListState {
  list: TodoItem[];
}

export const initialState: TodoListState = {
  list: [{
    name: 'Siemanko'
  }],
}

export const todoListReducer = createReducer(
  initialState,
  on(setNewItem, (state, {item}) => ({...state, list: state.list.concat(item)}))
)
