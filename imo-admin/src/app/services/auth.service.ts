import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  user(): Observable<User> {
    return this.http.get<User>(`${environment.api}/user`);
  }

  register(data: any): Observable<User> {
    return this.http.post<User>(`${environment.api}/register`, data);
  }

  login(data: any): Observable<any> {
    return this.http.post(`${environment.api}/login`, data);
  }

  logout(): Observable<any> {
    return this.http.post(`${environment.api}/logout`, {});
  }
}