import {Component, OnInit} from '@angular/core';
import {getList} from "../../store/reducers/todo-list.selectors";
import {Store} from "@ngrx/store";
import {setAll} from "../../store/reducers/todo-list.actions";

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  todayDate: Date = new Date();
  title = 'appNgRx';
  list$ = this.store.select(getList)

  constructor(
    private store: Store
  ) {
  }

  ngOnInit(): void {
    this.store.dispatch(setAll());
  }

}
