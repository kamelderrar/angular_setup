import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {

    public constructor(
        private http: Http //<-- added Http service.
    ) {
    }
    authenticate(user: any) {
        let url     = 'http://127.0.0.1:8000/api/login_check';
        let body     = new URLSearchParams();
        body.append('username', user.userName);
        body.append('password', user.password);
        let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
        let options = new RequestOptions({headers: headers});

        return this.http
            .post(url, body.toString(), options)
            .map((data: Response) => data.json(), error=> error.json());
    }

    public getToken(): string {
        return localStorage.getItem('id_token');
    }

    public logout() {
        localStorage.removeItem('id_token');
    }

    public loggedIn() {
        return tokenNotExpired('id_token');
    }

}
