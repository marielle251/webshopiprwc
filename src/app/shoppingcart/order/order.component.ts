import {Component, OnInit} from "@angular/core";
import {map} from "rxjs";
import {AuthService} from "../../auth/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ItemModel} from "../../home/store/item/item.model";
import {OrderService} from "./order.service";


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  naam: string =null
  total: number = 0;
  postcode: string = null
  huisnummer: string = null
  woonplaats: string = null
  message: string = null;
  ordered: boolean = false;

  cart: ItemModel[] = null;
  constructor(private router:Router, private _Activatedroute:ActivatedRoute, private orderService: OrderService) {
  }
  ngOnInit(): void {
    this._Activatedroute.paramMap
      .pipe(map(() => window.history.state)).subscribe(res=>{
      console.log(res)
      this.cart = res.data;
    })
    for (let i = 0; i < this.cart.length; i++) {
      this.total += this.cart[i].price;
    }
    this.naam= sessionStorage.getItem('naam');
    this.postcode= sessionStorage.getItem('postcode');
    this.huisnummer = sessionStorage.getItem('huisnummer');
    this.woonplaats= sessionStorage.getItem('woonplaats');
  }

  onOrder() {
    this.orderService.onOrder(this.naam, sessionStorage.getItem('email'), this.postcode, this.huisnummer, this.woonplaats, this.total)
      .subscribe((responseData) => {
        console.log(responseData)
        this.message = responseData;
        this.ordered = true;
        }
      )

  }
  onClosePopUp() {
    this.message = "";
  }

}
