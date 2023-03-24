import {Component, Input, OnInit} from '@angular/core';
import {ItemModel} from "../home/store/item/item.model";
import {ShoppingcartService} from "./shoppingcart.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.scss']
})
export class ShoppingcartComponent implements OnInit{
  visible = false;
  cartList: ItemModel[];
  @Input() book: ItemModel;
  cart: ItemModel[];
  total: number = 0;


  constructor(private shoppingcartService: ShoppingcartService, private router: Router) {
  }

  ngOnInit() {
    this.cart = this.shoppingcartService.getCart()

    for (let i = 0; i < this.cart.length; i++) {
      this.total += this.cart[i].price;
    }
    console.log(this.total)

  }

  onOrder() {

    this.router.navigate(['login'], {state: {data: this.cart}})
  }


  onAdd(book: ItemModel) {
    this.visible = true;
    this.cartList.push(book);

  }



}
