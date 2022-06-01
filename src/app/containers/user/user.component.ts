import { User } from './../../models/user';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: User[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.fetchData()
  }

  fetchData() {
    this.apiService.getAllUser().subscribe(data => {
      this.users = data;
      console.log(this.users);
    })
  }

}
