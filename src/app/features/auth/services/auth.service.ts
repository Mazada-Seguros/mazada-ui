import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = `${environment.API_SERVER_URL}/identity`;
  private tokenKey = 'auth_token';
  private isLoggedIn$ = new BehaviorSubject<boolean>(this.isAuthenticated());

  constructor(private http: HttpClient) { }

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/token`, credentials).pipe(
      tap((response: any) => {
        if (response.token) {
          //localStorage.setItem(this.tokenKey, response.token);
          this.isLoggedIn$.next(true);
        }
      })
    );
  }

  register(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/user`, data);
  }

  logout(): void {
    //localStorage.removeItem(this.tokenKey);
    this.isLoggedIn$.next(false);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  isLoggedIn(): Observable<boolean> {
    return this.isLoggedIn$.asObservable();
  }

  getUserRoles(id: number): Observable<any> {
    if (!this.getToken()) 
      return this.http.get(`${this.apiUrl}/user/roles/${id}`);
    return Observable.create(null);
  }

  hasRole(role: string): boolean {
    //return this.getUserRoles().includes(role);
    return true;
  }
}
