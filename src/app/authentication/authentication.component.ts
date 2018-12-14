import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


import { AuthenticationService } from './authentication.service';
@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {


    ngOnInit() {
    }

    loginForm: FormGroup;
    error: string = '';

    constructor(
        private formBuilder: FormBuilder,
        private authenticationService: AuthenticationService,
        private router: Router
    ) {
        this.loginForm = formBuilder.group({
            'userName': ['', Validators.required],
            'password': ['', Validators.required]
        });
    }

    onSubmit() {
        this.authenticationService
            .authenticate(this.loginForm.value)
            .subscribe(
                data => {
                    localStorage.setItem('id_token', data.token);
                    this.router.navigate(['post']);
                },
                error => this.error = JSON.parse(error._body)
            );
    }


}
