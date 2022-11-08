import {Component, ViewChild} from '@angular/core';
import {Store} from "@ngrx/store";
import {setNewItem} from "./reducers/todo-list.actions";
import {TodoItem} from "./models";
import {getList} from "./reducers/todo-list.selectors";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('input') inputName = {};
  todayDate: Date = new Date();
  title = 'appNgRx';
  list$ = this.store.select(getList)

  constructor(
    private store: Store
  ) {
  }

  addTodo(input: HTMLInputElement) {
    let item = new TodoItem(input.value)
    this.store.dispatch(setNewItem({item: item}))
    input.value = '';
  }

}
