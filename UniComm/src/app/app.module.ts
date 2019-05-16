import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RatingModule } from 'ngx-bootstrap/rating';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ItemComponent } from './item/item.component';
import { RatingComponent } from './rating/rating.component';
import {FormsModule} from '@angular/forms';
import { CartComponent } from './cart/cart.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    ItemComponent,
    RatingComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    RatingModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
