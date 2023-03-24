import {Component, OnInit} from "@angular/core";
import {ReplaySubject} from "rxjs";
import {ItemModel} from "../store/item/item.model";
import {StoreService} from "../store/store.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {AdminService} from "./admin.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  size: number = 0

  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;

  sizeArray: any = [];
  info$: ReplaySubject<ItemModel[]> = new ReplaySubject<ItemModel[]>(8)
  bookList: ItemModel[] = [];
  tweede : boolean = false;
  add: boolean = false;
  algemeen: boolean = true;
  selectedFile : File = null;
  constructor(private adminService: AdminService, private storeService: StoreService) {
  }
  ngOnInit() {
    this.storeService.fetchBooks().subscribe(data => {
      this.info$.next(data)
      console.log(data)
    })
    this.getData()
  }
  onFileUpload(event) {
//Upload file here send a binary data
    this.selectedFile = event.target.files[0]
  }
  OnUploadFile() {
//Upload file here send a Form data
    const uploadFormData = new FormData();
    uploadFormData.append('myFile', this.selectedFile, this.selectedFile.name);
    console.log(uploadFormData)
    // this.http.post('localhost:4200/file-upload', uploadFormData)
    //   .subscribe(res => {
    //     console.log(res)
    //   });
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const title = form.value.title;
    const author = form.value.title;
    const description = form.value.description;
    const genre = form.value.genre;
    const image = form.value.image;
    const language = form.value.image;
    const pages = form.value.pages;
    const price = form.value.price;
    const categorie = form.value.category;
    this.adminService.addBook(author, description, genre, image, language, pages, price, title, categorie).subscribe((responseData) => {
      console.log(responseData)
      window.location.reload()
    })

  }






  onDelete(event) {
    console.log(event)
  }

  onTweede() {
    this.tweede = true;
    this.algemeen = false;
  }

  onAdd() {
    this.add = true;
    this.algemeen = false;

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



}
