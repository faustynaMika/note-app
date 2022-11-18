import {Note} from "../../models";
import {createReducer, on} from "@ngrx/store";
import {setAllSuccess, setNewItem} from "./todo-list.actions";

export interface TodoListState {
  list: Note[];
}

export const initialState: TodoListState = {
  list: [],
}

export const todoListReducer = createReducer(
  initialState,
  on(setNewItem, (state, {item}) => ({...state, list: state.list.concat(item)})),
  on(setAllSuccess, (state, {items}) => ({...state, list: items}))
)
