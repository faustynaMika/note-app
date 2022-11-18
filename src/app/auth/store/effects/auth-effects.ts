import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {map, switchMap} from "rxjs";
import {AuthService} from "../../service/auth.service";
import {loginSuccess} from "../reducers/auth.actions";

@Injectable()
export class AuthEffects {

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[auth] login'),
      switchMap(({username, password}) => this.authService.login(username, password).pipe(
        map(token => {
          localStorage.setItem("token", token.token)
          return loginSuccess({user: {username: username, token: token}})
        })
      ))
    )
  );

  constructor(
    private authService: AuthService,
    private actions$: Actions,
  ) {
  }
}
