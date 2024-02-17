import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [AppComponent, TableComponent, FormComponent],
  imports: [BrowserModule, TableComponent, FormComponent, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
