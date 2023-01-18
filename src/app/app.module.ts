import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TasksFormComponent } from './tasks-form/tasks-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksListComponent,
    TasksFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
