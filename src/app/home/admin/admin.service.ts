import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({ providedIn: 'root'})
export class AdminService {

  constructor(private http: HttpClient) {
  }
  addBook(author: string, description: string, genre: string, image: string, language: string, pages: number,
          price: number, title: string, categorie: string) {

    return this.http.post('http://localhost:8080/api/v1/book/add', {
      author: author,
      description: description,
      genre: genre,
      image: image,
      language: language,
      pages: pages,
      price: price,
      title: title,
      categorie: categorie
    }, {responseType: "text"})
  }
}
