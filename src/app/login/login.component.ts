// import {Component, ElementRef, ViewChild} from '@angular/core';
// import {NgForm} from "@angular/forms";
// import {LoginService} from "./login.service";
// import {ReplaySubject} from "rxjs";
// import {ItemModel} from "../home/store/item/item.model";
// import {KlantModel} from "./KlantModel";
// import {Router} from "@angular/router";
//
// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss']
// })
// export class LoginComponent {
//   @ViewChild('f') login: NgForm;
//   info$: ReplaySubject<KlantModel> = new ReplaySubject<KlantModel>(8)
//   //bookList: KlantModel = [];
//   size: number = 0
//   showStore = false;
//
//   klant: KlantModel;
//   @ViewChild("formLogin") ngFormLogin?:NgForm
//   sizeArray: any = [];
//
//   //onSubmit(form: NgForm) {
//    // console.log(form)
//
//  // }
//
//   constructor(private loginService: LoginService, private router: Router) {
//     this.loginService.isLoggedIn.subscribe((loggedIn: boolean) => {
//       if (loggedIn) router.navigate(["/home"])
//     })
//   }
//
//   onSubmitLogin() {
//    // this.isEmailValid = true
//   //  this.isPassValid = true
//
//     const email = this.ngFormLogin?.value.email
//     const password = this.ngFormLogin?.value.password
//
//     //if (!email) this.isEmailValid = false
//    // if (!password) this.isPassValid = false
//
//
//     //if (this.isEmailValid && this.isPassValid) {
//    //   this.AwaitResponse = true
//
//       this.loginService.login(email, password).subscribe((data) => {
//         //this. = data.message
//         console.log(data)
//         //this.AwaitResponse = false
//       })
//   //  }
//   }
//
//   onSubmit() {
//     this.loginService.login(this.login.value.klantid, this.login.value.wachtwoord)
//       .subscribe(data => {
//         //this.info$.next(data)
//         console.log(data)
//       })
//     this.getData()
//   }
//
//   getData() {
//     this.info$.subscribe(data => {
//       this.klant = data;
//       //this.size = this.bookList.length;
//       //this.sizeArray = new Array(this.size);
//       //for (let i = 0; i < this.size; i++) {
//       //  this.sizeArray[i] = i
//       })
//     console.log(this.klant);
//     //if (this.klant) {
//       console.log("goi")
//       this.router.navigate(['home']);
//     }
//
//
//
//
//     //console.log(this.login.value.klantid)
//
//
//
// }
