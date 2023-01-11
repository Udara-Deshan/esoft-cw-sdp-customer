import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {FuelTokenDTO} from "../dtos/FuelTokenDTO";

@Injectable({
  providedIn: 'root'
})
export class MainStockService {
  baseUrl = environment.baseUrl + 'payment/'

  constructor(private httpClient: HttpClient) {
  }

  requestToken(pid:number,status:string) {
    return this.httpClient.put(this.baseUrl + 'changePaymentStatus',{}, {
      params:{
        pid,
        status
      }
    })
  }
}
