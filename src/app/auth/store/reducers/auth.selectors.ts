import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AuthState} from "./auth.reducers";

export const getAuth = createFeatureSelector<AuthState>('auth')

export const getUser = createSelector(
  getAuth,
  (state: AuthState) => state.user
);

