import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { GiveMoneyBtnComponent } from './give-money-btn/give-money-btn.component';
import { ToggleBoxComponent } from './toggle-box/toggle-box.component';
import {FormsModule} from "@angular/forms";
import { NComponent } from './n/n.component';

@NgModule({
  declarations: [
    AppComponent,
    GiveMoneyBtnComponent,
    ToggleBoxComponent,
    NComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
