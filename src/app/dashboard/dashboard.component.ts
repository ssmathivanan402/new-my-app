import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

fakeUsers=[];
selectedUser=[];

  constructor() { }

  ngOnInit() {

  this.fakeUsers = [{ id: 1, firstName: 'Dhiraj', lastName: 'Ray', email: 'dhiraj@gmail.com' },
    { id: 2, firstName: 'Tom', lastName: 'Jac', email: 'Tom@gmail.com' },
    { id: 3, firstName: 'Hary', lastName: 'Pan', email: 'hary@gmail.com' },
    { id: 4, firstName: 'praks', lastName: 'pb', email: 'praks@gmail.com' }];

  selectedUser: this.fakeUsers;


  }

}
