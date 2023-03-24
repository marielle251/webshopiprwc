import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './home/navigation/navigation.component';
import { StoreComponent } from './home/store/store.component';
import { ItemComponent } from './home/store/item/item.component';
import { FilterComponent } from './home/store/filter/filter.component';
import { ItemdetailsComponent } from './home/itemdetails/itemdetails.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { AuthComponent } from "./auth/auth.component";
import {LoadingSpinnerComponent} from "./shared/loading-spinner/loading-spinner.component";
import {HomeAlgemeenComponent} from "./home/homeAlgemeen.component";
import {SignupComponent} from "./auth/signup/signup.component";
import {AdminComponent} from "./home/admin/admin.component";
import {AlertComponent} from "./auth/signup/alert/alert.component";
import {OrderComponent} from "./shoppingcart/order/order.component";
import {AdminAuthComponent} from "./home/admin/adminAuth/adminAuth.component";

//import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    StoreComponent,
    ItemComponent,
    FilterComponent,
    ItemdetailsComponent,
    ShoppingcartComponent,
    AuthComponent,
    LoadingSpinnerComponent,
    HomeAlgemeenComponent,
    SignupComponent,
    AdminComponent,
    AlertComponent,
    OrderComponent,
    AdminAuthComponent
   // LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
