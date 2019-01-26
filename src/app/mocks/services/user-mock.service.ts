import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserMockService {
  constructor() {}

  getUsers() {
    return ['user1'];
  }
}
