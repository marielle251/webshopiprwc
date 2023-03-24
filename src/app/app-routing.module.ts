import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ShoppingcartComponent} from "./shoppingcart/shoppingcart.component";
import {AuthComponent} from "./auth/auth.component";
import {ItemdetailsComponent} from "./home/itemdetails/itemdetails.component";
import {HomeAlgemeenComponent} from "./home/homeAlgemeen.component";
import {SignupComponent} from "./auth/signup/signup.component";
import {AdminComponent} from "./home/admin/admin.component";
import {OrderComponent} from "./shoppingcart/order/order.component";
import {AdminAuthComponent} from "./home/admin/adminAuth/adminAuth.component";
//import {LoginComponent} from "./login/login.component";
//import {LoginComponent} from "./login/login.component";
//import {AuthService} from "./services/auth.service";

const routes: Routes = [
  { path: "", redirectTo: "homeAlgemeen", pathMatch: "full"},
      {path: "home", component: HomeComponent},
  {path: "homeAlgemeen", component: HomeAlgemeenComponent},
  {path: 'homeView/:id', component: HomeComponent},
  {path: "login", component: AuthComponent},
  {path: "shoppingcart", component: ShoppingcartComponent},
  {path: "itemdetails", component: ItemdetailsComponent},
  {path: "signup", component: SignupComponent},
  {path: "admin", component: AdminComponent},
  {path: "order", component: OrderComponent},
  {path: "adminLogin", component: AdminAuthComponent},
];

//const routes: Routes =[
  //  { path: '', component: LoginComponent},
  //{path: 'home', component: HomeComponent},
  //{path: 'shoppingcart', component: ShoppingcartComponent}
//]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
