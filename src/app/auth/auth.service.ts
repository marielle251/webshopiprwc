import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, throwError} from "rxjs";
import {AuthModel} from "./auth.model";
import {Router} from "@angular/router";
//import {error} from "@angular/compiler-cli/src/transformers/util";

export interface AuthResponseData {
  kind: string,
  idToken: string,
  email: string,
  refreshToken: string,
  expiredIn: string,
  localId: string
  registered?: boolean
}

export interface resDataModel {
  username: string
}

@Injectable({providedIn: 'root'})
export class AuthService {
  private adminKey: boolean = false;
  constructor(private http: HttpClient, private router: Router) {

  }
  setAdminKey(value: boolean){
    this.adminKey = value;
  }
  signup(email: string, password: string) {
    return this.http.post<resDataModel>('signupurl/bestaatnogniet',
      {
        email: email,
        password: password,
        returnSecureToken: true
      })
  }

  login(email: string, password: string) {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post<AuthModel>('http://localhost:8080/api/v1/auth/authenticate',

      {
        "email": email,
        "password": password
      }, {headers}
    );
   // .pipe(catchError(this.errorHandler));
  }
  adminAuth(){
    const headers = { 'Authorization': 'Bearer '+sessionStorage.getItem('JWT') };
    let url =  "http://localhost:8080/api/v1/auth/admin"
    // @ts-ignore
    this.http.get<string>(url, {headers, responseType: 'text'}).subscribe((response) =>{
      if(String(response) == "Admin Board."){
        sessionStorage.setItem("adminKey",String(true));
        this.setAdminKey(true)
        console.log("FIHVODSNCKLA")
        console.log(this.adminKey)
      }
      else{
        this.router.navigate(['home']);
        sessionStorage.setItem("adminKey",String(false));
        this.setAdminKey(false)

      }
    })

  }

  // private errorHandler(errorRes: HttpErrorResponse) {
  //   let errorMessage = 'An unknown error occurred';
  //   if (!errorRes.error || !errorRes.error.error) {
  //     return throwError(errorMessage)
  //   }
  //   switch (errorRes.error.error.message) {
  //     case 'EMAIL_EXISTS':
  //       errorMessage = 'This email already exists'
  //   }
  //   return throwError(errorMessage)
  // }

}
