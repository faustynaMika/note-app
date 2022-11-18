import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {NoteListComponent} from "./components/note-list/note-list.component";
import {LoginComponent} from "./auth/components/login/login.component";
import {NoteEditComponent} from "./components/note-edit/note-edit.component";
import {GetStartedComponent} from "./components/get-started/get-started.component";

const routes: Routes = [
  {path: '', component: GetStartedComponent},
  {
    path: 'notes', component: NoteListComponent,

  },
  {path: 'login', component: LoginComponent},
  {path: 'notes/edit/:id', component: NoteEditComponent},
  {path: 'notes/add', component: NoteEditComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
