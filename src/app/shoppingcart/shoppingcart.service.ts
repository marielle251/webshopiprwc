import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {ItemModel} from "../home/store/item/item.model";


@Injectable({ providedIn: 'root'})
export class ShoppingcartService {
  //shoppingCart = new BehaviorSubject<ItemModel[]>([])
  //cart?: ItemModel[]
  shoppingCart: ItemModel[] =[]

  getCart() {
    return this.shoppingCart;
  }

  addItem(book: ItemModel) {
    this.shoppingCart.push(book);
    console.log(this.shoppingCart)
  }


}
