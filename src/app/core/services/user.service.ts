import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = environment.baseUrl + 'user/';

  constructor(private httpClient: HttpClient) {
  }

  getUsers() {
    return this.httpClient.get(this.url + 'getAllUsers')
  }
}
