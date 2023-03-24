import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AuthModel} from "../../auth/auth.model";

@Injectable({ providedIn: 'root'})
export class OrderService {

  constructor(private http: HttpClient) {
  }

  onOrder(naam: string, email: string, postcode: string, huisnummer: string, woonplaats: string, total: number) {
    const headers = { 'Authorization': 'Bearer '+sessionStorage.getItem('JWT')};
    return this.http.post('http://localhost:8080/api/v1/order/make',

      {
        "naam": naam,
        "totaal": total,
        "postcode": postcode,
        "huisnummer": huisnummer,
        "woonplaats": woonplaats,
        "email": email
      },  {responseType: "text", headers}
    )  ;
  }
}
