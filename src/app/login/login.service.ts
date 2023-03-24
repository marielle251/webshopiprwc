// import {BehaviorSubject, tap} from "rxjs";
// import {ItemModel} from "../home/store/item/item.model";
// import {KlantModel} from "./KlantModel";
//
// import {LoginModel} from "./login.model";
//
// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import {AuthenticatieResponse} from "../models/AuthenticatieResponse";
// import {Token} from "../models/token";

// @Injectable({providedIn: 'root'})
// export class LoginService {
//   klantAdmin = new BehaviorSubject<boolean>(false)
//   isAnAdmin = false
//
//   authenticated = false;
//   token: string = ""
//
//   private _LoggedIn = new BehaviorSubject<boolean>(false)
//   isLoggedIn = this._LoggedIn.asObservable()
//
//   constructor(private http: HttpClient) {
//   }
//
//   login(id: number, wachtwoord: string) {
//
//     return this.http.post<AuthenticatieResponse>('http://localhost:8080/auth/login', {
//       id: id,
//       wachtwoord: wachtwoord
//     }).pipe(tap(data => {
//       if (!data.correct) return
//       const token = this.getTokenValues(data.token)
//       this.isAdmin(data.token)
//       if (token.pass) {
//         // this._changePassword.next(true)
//         this.token = data.token
//       } else {
//         localStorage.setItem("crop_key", data.token)
//         this._LoggedIn.next(true)
//       }
//     }))
//   }
//
//   isAdmin(tokenS: string) {
//     const token = this.getTokenValues(tokenS)
//     if (token.rol === "ADMIN") {
//       this.klantAdmin.next(true)
//       this.isAnAdmin = true
//     } else {
//       this.klantAdmin.next(false)
//       this.isAnAdmin = false
//     }
//   }
//
//   getTokenValues(token: string): Token {
//     const object = JSON.parse(atob(token.split('.')[1]))
//     return new Token(object["defaultPass"], object["sub"], object["rol"], object["naam"], object["iss"], object["id"], object["iat"]);
//   }
// }

//
//
// export class LoginService {
//  // shoppingCart = new BehaviorSubject<ItemModel[]>([])
//   cart?: ItemModel[]
//   shoppingCart: ItemModel[] =[]
//  klant: KlantModel[] = []
//  constructor(private http: HttpClient) {
//  }
//
//   login(klantid: number, gebruikersnaam: string, wachtwoord: string) {
//    const postData : LoginModel = { klantid: klantid, gebruikersnaam: gebruikersnaam, wachtwoord: wachtwoord}
//    console.log(postData);
//    return this.http.post<KlantModel>('http://localhost:8080/login', postData);
//  }
//
//
//
//
//
// }
