import { Injectable } from '@angular/core';
import {AuthHttp} from "angular2-jwt";

@Injectable()
export class UserRepositoryService {

  constructor(private AuthHttp: AuthHttp) {}

  getUsers() {
    let url = 'http://127.0.0.1:8000/api/users/all';
    return this.AuthHttp
        .get(url)
        .map(
            data => data.json(),
            error => console.log(error)
        )
  }

}
