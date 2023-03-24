import {Component, Input, OnInit} from '@angular/core';
import {KlantModel} from "../login/KlantModel";
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  categorie: string;

  @Input() klant: KlantModel;

  constructor(private _Activatedroute:ActivatedRoute) {}

  ngOnInit() {
    this.categorie = this._Activatedroute.snapshot.paramMap.get("id");
    console.log(this.categorie)
  }

  onBook(title: string) {
    console.log(title)

  }

}
