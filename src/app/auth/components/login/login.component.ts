import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {getUser} from "../../store/reducers/auth.selectors";
import {login} from "../../store/reducers/auth.actions";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user$ = this.store.select(getUser)

  constructor(private store: Store) {
  }

  ngOnInit(): void {
  }

  login() {
    this.store.dispatch(login({username: 'a', password: 'a'}))
  }
}
