import {Component, Input, OnInit} from "@angular/core";
import {NgForm} from '@angular/forms'
import {AuthResponseData, AuthService, resDataModel} from "./auth.service";
import {map, Observable} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {ItemModel} from "../home/store/item/item.model";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit{
  status: string;
  isLoginMode = true;
 // isLoading = false;
  error: string = null;
  cart : ItemModel[] = null;

  constructor(private auhtService: AuthService, private router:Router, private _Activatedroute:ActivatedRoute) {
  }

  onSwitchMode() {
    //this.isLoginMode = !this.isLoginMode
    this.router.navigate(['signup'])

  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.wachtwoord;
    console.log(email, password)

    let authObs: Observable<resDataModel>;

   // this.isLoading = true;
    console.log(this.isLoginMode)

      this.auhtService.login(email, password)
        .subscribe((responseData) =>  {
          console.log("in auth component:")
          console.log(responseData.token)
            // @ts-ignore
            sessionStorage.setItem('JWT',responseData.token);
            sessionStorage.setItem("key",String(true));
            sessionStorage.setItem('email', email);
            sessionStorage.setItem('naam', responseData.naam);
            sessionStorage.setItem('postcode', responseData.postcode);
            sessionStorage.setItem('huisnummer', responseData.huisnummer);
            sessionStorage.setItem('woonplaats', responseData.woonplaats);
            console.log(responseData.token)
          //  this.isLoading = false;
            console.log("0")
            this.router.navigate(['order'], {state: {data: this.cart}})
          console.log(this.cart)
            this.auhtService.adminAuth()
        },
        // error => {
        //   console.log(error)
        //   this.error = "An error occurred!";
        //   this.isLoading = false;
        // }
      );






    form.reset()
  }

  ngOnInit() {

    this._Activatedroute.paramMap
      .pipe(map(() => window.history.state)).subscribe(res=>{
        console.log("res")
      console.log(res.data)
      this.cart = res.data;
    })


  }
}
