import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class PostRepositoryService {

    constructor(private authHttp: AuthHttp) {}

    getList() {
        let url = 'http://127.0.0.1:8000/api/posts/all  ';
        return this.authHttp
            .get(url)
            .map((data: Response) => data.json(), error=> console.log(error));
    }

}
