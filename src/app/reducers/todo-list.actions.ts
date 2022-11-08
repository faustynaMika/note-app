import {createAction, props} from "@ngrx/store";
import {TodoItem} from "../models";

export const setNewItem = createAction('[Todo list]', props<{item: TodoItem}>());
