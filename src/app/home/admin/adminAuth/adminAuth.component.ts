import {Component, Input, OnInit} from "@angular/core";
import {NgForm} from '@angular/forms'

import {map, Observable} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {ItemModel} from "../../store/item/item.model";
import {AuthService} from "../../../auth/auth.service";

@Component({
  selector: 'app-adminauth',
  templateUrl: './adminAuth.component.html',
  styleUrls: ['./adminAuth.component.scss']
})
export class AdminAuthComponent implements OnInit{
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
          console.log("hwdqsal")
          console.log(this.status)


            this.auhtService.adminAuth()
        console.log("sess" + sessionStorage.getItem('adminKey'))
            if (sessionStorage.getItem('adminKey')) {
              this.router.navigate(['admin'])
          }
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
      console.log(res)
      this.cart = res.data
      console.log("gello", this.cart)
    })

    // this.status = this._Activatedroute.snapshot.paramMap.get("status");
    //console.log(this.status)

  }
}
