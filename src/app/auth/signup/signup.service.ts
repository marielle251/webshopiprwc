import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {resDataModel} from "../auth.service";
import {AuthModel} from "../auth.model";


@Injectable({providedIn: 'root'})
export class SignupService {
  constructor(private http: HttpClient) {

  }
  signup(email: string, password: string, naam: string, postcode: string, woonplaats: string, huisnummer: string) {
    return this.http.post<AuthModel>('http://localhost:8080/api/v1/auth/register',
      {
        email: email,
        password: password,
        naam: naam,
        postcode: postcode,
        woonplaats: woonplaats,
        huisnummer: huisnummer,
        returnSecureToken: true
      })
  }

}
