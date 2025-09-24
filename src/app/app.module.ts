import { NgModule } from "@angular/core";
import {App} from './app';
import { TasksComponent } from './tasks/tasks';
import { HeaderComponent } from './header/header';
import { UserComponent } from "./user/user";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  declarations: [App,HeaderComponent ,UserComponent],
  imports: [BrowserModule, TasksComponent],
  providers: [],
  bootstrap: [App]
})
export class AppModule {}