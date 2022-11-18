import {createFeatureSelector, createSelector} from "@ngrx/store";
import {TodoListState} from "./todo-list.reducers";

export const getTodoList = createFeatureSelector<TodoListState>('todoList')

export const getList = createSelector(
  getTodoList,
  (state: TodoListState) => state.list
);

export const getById = (id: string) => createSelector(getList, (allItems) => {
  if (allItems) {
    return allItems.find(item => {
      return item.id === id;
    });
  } else {
    return {};
  }
});

