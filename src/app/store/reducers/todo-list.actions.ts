import {createAction, props} from "@ngrx/store";
import {Note} from "../../models";

export const setNewItem = createAction('[Todo list] add', props<{item: Note}>());
export const deleteItem = createAction('[Todo list] delete', props<{id: string}>());
export const updateItem = createAction('[Todo list] update', props<{item: Note}>());


export const setAll = createAction('[Todo list] load')
export const setAllSuccess = createAction('[Todo list] load success', props<{items: Note[]}>())
