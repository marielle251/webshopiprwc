import {Component, Input, OnInit} from '@angular/core';
import {ItemModel} from "../store/item/item.model";
import {ShoppingcartComponent} from "../../shoppingcart/shoppingcart.component";
import {ShoppingcartService} from "../../shoppingcart/shoppingcart.service";
import {ActivatedRoute, Router} from '@angular/router'
import {map} from "rxjs";

@Component({
  selector: 'app-itemdetails',
  templateUrl: './itemdetails.component.html',
  styleUrls: ['./itemdetails.component.scss']
})
export class ItemdetailsComponent implements OnInit{
 book: ItemModel;
  cartVisible = false;
  shoppingCartComponent: ShoppingcartComponent;

  constructor(private shoppingcartService: ShoppingcartService,private _Activatedroute:ActivatedRoute, private router:Router ) {
    console.log('hi')
    console.log(this.router.getCurrentNavigation().extras.state);

  }

  ngOnInit() {
    this._Activatedroute.paramMap
      .pipe(map(() => window.history.state)).subscribe(res=>{
      console.log(res)
      this.book = res;
    })
  }

  onAddToCart(book: ItemModel) {
    this.cartVisible = true;
    this.shoppingcartService.addItem(book);

    //this.shoppingcartComponent.onAdd(this.book);

  }
}
