import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  url = environment.baseUrl + 'payment/';

  constructor(private httpClient: HttpClient) {
  }

  makePayment(pid: number) {
    return this.httpClient.put(this.url + 'changePaymentStatus', {}, {
      params: {
        pid,
        status: 'PAID'
      }
    })
  }

  getPayments() {
    return this.httpClient.get(this.url + 'getAllPayments')
  }
}
