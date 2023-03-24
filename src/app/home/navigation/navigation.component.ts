import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {KlantModel} from "../../login/KlantModel";
import {ItemModel} from "../store/item/item.model";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit{
  @Input() klant: KlantModel;
  @Output() onGoHome = new EventEmitter<string>();
  categorie: string;
  showAdmin = false;
  //showBooks: boolean = false;


  constructor(private router: Router){}

  ngOnInit() {
    // console.log(this.klant)
    // if (this.klant.rol === 'admin') {
    //   this.showAdmin = true;
    // }
  }

  goHome(event) {
    this.router.navigate(['homeAlgemeen'])
    //this.showBooks = true;
  }
  goShoppingcart() {
    this.router.navigate(['shoppingcart']);
  }


}
