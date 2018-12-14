import { Component, OnInit } from '@angular/core';
import { AuthenticationService} from "../authentication/authentication.service";
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    constructor(private authenticationService: AuthenticationService, private router: Router) {}

    hasAuthToken() {
        return localStorage.getItem('id_token') !== null;
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['home']);
    }
  ngOnInit() {
  }

}
