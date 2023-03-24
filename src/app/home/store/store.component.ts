import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ItemModel} from "./item/item.model";
import {StoreService} from "./store.service";
import {ReplaySubject} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit{
  @Output() onDetails = new EventEmitter<ItemModel>();
  @Input() categorie: string;
  book: ItemModel;

  showDetails = false;


  info$: ReplaySubject<ItemModel[]> = new ReplaySubject<ItemModel[]>(8)
  bookList: ItemModel[] = [];
  size: number = 0
  sizeArray: any = [];



  constructor(private storeService: StoreService, private router: Router) {
  }

  ngOnInit() {
    console.log("dwqsa")
    this.storeService.fetchBooks().subscribe(data => {
      this.info$.next(data)
      console.log(data)
    })
    this.getData()
    console.log(this.categorie)

  }

  getData() {
    this.info$.subscribe(data => {
      this.bookList = data;
      this.size = this.bookList.length;
      this.sizeArray = new Array(this.size);
      for (let i = 0; i < this.size; i++) {
        this.sizeArray[i] = i
      }
    })

  }

  onBook(book: ItemModel) {
    this.router.navigateByUrl('/itemdetails', { state: this.book});
    this.book = book;
    console.log(book.title)
    this.onDetails.emit(book);
    //this.showDetails = true;
   // this.router.navigate(['itemdetails'])
  }

}
