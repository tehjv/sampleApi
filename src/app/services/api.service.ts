import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private USERSURL = "https://jsonplaceholder.typicode.com/users";

  constructor(private httpClient: HttpClient) { }

  getUsers() {
    return this.httpClient.get(this.USERSURL);
  }
}
