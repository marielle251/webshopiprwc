import {Component, OnInit} from "@angular/core";
import {AuthService, resDataModel} from "../auth.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {Observable} from "rxjs";
import {SignupService} from "./signup.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  isLoading = false;
  error: string = null;
  alert : boolean = false;
  message : string = null;

  constructor(private signupService: SignupService, private router: Router) {
  }

  onSwitchMode() {
    this.router.navigate(['login'])
  }



  onSubmit(form: NgForm) {
    console.log('hello')
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.wachtwoord;
    const naam = form.value.naam;
    const postcode = form.value.postcode;
    const woonplaats = form.value.woonplaats;
    const huisnummer = form.value.huisnummer;
    console.log(email, password)

    let authObs: Observable<resDataModel>;

    this.isLoading = true;
    this.signupService.signup(email, password, naam, postcode, woonplaats, huisnummer)
        .subscribe((responseData) =>  {
            console.log("in auth component:")
            console.log(responseData.token)
            // @ts-ignore
            sessionStorage.setItem('JWT',responseData.token);
            sessionStorage.setItem("key",String(true));
            this.isLoading = false;
            this.message = responseData.message;
            if (!responseData.message) {
              this.router.navigate(['homeAlgemeen'])
            } else {
              this.alert = true;
            }
          console.log(responseData.message)
          },
          // error => {
          //   console.log(error)
          //   this.error = "An error occurred!";
          //   this.isLoading = false;
          // }
        );





    form.reset()
  }
  onClosePopUp() {
    this.message = "";
  }

  ngOnInit() {
  }
}
