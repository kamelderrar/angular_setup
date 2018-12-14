import { Component, OnInit } from '@angular/core';
import {UserRepositoryService} from "./user-repository.service";
import { MatTableDataSource } from "@angular/material";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    users: any[] = [];
    error: string = '';
    displayedColumns = ['firstName', 'lastName'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }
    constructor(private userRepository: UserRepositoryService) { }

  ngOnInit() {
    this.userRepository
        .getUsers()
        .subscribe(
            res => this.users = res.users,
                  error => this.error = error
        )
  }


}
export interface User {
    last_name: string;
}

const ELEMENT_DATA: User[] = this.users;
