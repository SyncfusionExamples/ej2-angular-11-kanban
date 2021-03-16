import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import the KanbanModule for the Kanban component
import { KanbanModule } from '@syncfusion/ej2-angular-kanban';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, KanbanModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
