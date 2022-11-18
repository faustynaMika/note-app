import {Component, OnInit} from '@angular/core';
import {Note} from "../../models";
import {deleteItem, setNewItem, updateItem} from "../../store/reducers/todo-list.actions";
import {Store} from "@ngrx/store";
import {ActivatedRoute, Router} from "@angular/router";
import {getById} from "../../store/reducers/todo-list.selectors";

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css']
})
export class NoteEditComponent implements OnInit {
  id: string | null = null;
  public note: any;


  constructor(private route: ActivatedRoute, private router: Router, private store: Store) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];

      if (params['id']) {
        this.store.select(getById(params['id']))
          .subscribe((item) => {
            this.note = item;
          });
      }
    });


  }

  addOrUpdate(title: string, description: string) {
    let item = new Note(this.id, title, description)

    if (this.id) {
      this.store.dispatch(updateItem({item}))
    } else {
      this.store.dispatch(setNewItem({item}))
    }
    this.router.navigate(["notes"])
  }

  delete(id: string) {
    this.store.dispatch(deleteItem({id: id}))
    this.router.navigate(["notes"])
  }

}
