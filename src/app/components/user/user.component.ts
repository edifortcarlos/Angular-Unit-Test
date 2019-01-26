import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  text = 'User Page';
  users;

  constructor(private userService: UserService) {
    this.users = this.userService.getUsers();
  }

  ngOnInit() {}
}
