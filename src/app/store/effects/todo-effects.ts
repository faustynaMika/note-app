import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {setAll, setAllSuccess} from "../reducers/todo-list.actions";
import {map, switchMap} from "rxjs";
import {NoteService} from "../../shared/services/note.service";

@Injectable()
export class TodoEffects {

  addItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Todo list] add'),
      switchMap(({item}) => this.todoservice.addItem(item).pipe(
        map(() => setAll())
      ))
    )
  );
  deleteItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Todo list] delete'),
      switchMap(({id}) => this.todoservice.deleteItem(id).pipe(
        map(() => setAll())
      ))
    )
  );
  updateItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Todo list] update'),
      switchMap(({item}) => this.todoservice.updateItem(item).pipe(
        map(() => setAll())
      ))
    )
  );

  loadAllItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Todo list] load'),
      switchMap(() => this.todoservice.getAll().pipe(
        map(items => setAllSuccess({items: items}))
      ))
    )
  );

  constructor(
    private todoservice: NoteService,
    private actions$: Actions,
  ) {
  }
}
