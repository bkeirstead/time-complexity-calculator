import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MegaFieldComponent } from './mega-field/mega-field.component';

@NgModule({
  declarations: [
    AppComponent,
    MegaFieldComponent
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
