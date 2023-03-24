import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ItemModel} from "./item/item.model";


@Injectable({providedIn: 'root'})
export class StoreService{
  constructor(private http: HttpClient) {
  }

  fetchBooks() {
    console.log("in fetchbooks:")
    console.log(sessionStorage.getItem('JWT'))
    //const headers = { 'Authorization': 'Bearer ' + sessionStorage.getItem('JWT').valueOf()};
    //console.log(headers)
    return this.http.get<ItemModel[]>('http://localhost:8080/api/v1/book/fetch');
  }
}
