import {createAction, props} from "@ngrx/store";
import {User} from "../../models/user";

export const login = createAction('[auth] login', props<{username: string, password: string}>());
export const loginSuccess = createAction('[auth] login success', props<{user: User}>());

export const logout = createAction('[auth] logout', props<{id: string}>());
export const register = createAction('[auth] register', props<{username: string, password: string}>());
