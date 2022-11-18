import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {todoListReducer} from "./store/reducers/todo-list.reducers";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {FormsModule} from "@angular/forms";
import {TodoEffects} from "./store/effects/todo-effects";
import {EffectsModule} from '@ngrx/effects';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { NoteListComponent } from './components/note-list/note-list.component';
import { AppRoutingModule } from './app-routing.module';
import {authReducer} from "./auth/store/reducers/auth.reducers";
import {AuthEffects} from "./auth/store/effects/auth-effects";
import {AuthInterceptor} from "./auth/auth.interceptor";
import {AuthModule} from "./auth/auth.module";
import { NoteEditComponent } from './components/note-edit/note-edit.component';
import {NavbarComponent} from "./components/navbar/navbar.component";
import { GetStartedComponent } from './components/get-started/get-started.component';
import {MatSidenavModule} from "@angular/material/sidenav";

@NgModule({
  declarations: [
    AppComponent,
    NoteListComponent,
    NoteEditComponent,
    NavbarComponent,
    GetStartedComponent,
  ],
    imports: [
        HttpClientModule,
        BrowserModule,
        StoreModule.forRoot({todoList: todoListReducer, auth: authReducer}, {}),
        EffectsModule.forRoot([TodoEffects, AuthEffects]),
        StoreDevtoolsModule.instrument({logOnly: environment.production}),
        BrowserAnimationsModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatListModule,
        FormsModule,
        AppRoutingModule,
        AuthModule,
        MatSidenavModule
    ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
