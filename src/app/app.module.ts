import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TaskcomponentComponent } from './taskcomponent/taskcomponent.component';
import { TasksComponent } from './taskcomponent/tasks/tasks.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { CardComponent } from './shared/card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TaskcomponentComponent,
    TasksComponent,
    AddTaskComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    HeaderComponent,
    FormsModule,
    DatePipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
