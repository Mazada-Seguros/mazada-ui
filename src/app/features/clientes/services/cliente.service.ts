import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { PersonaNatural } from '../models/persona-natural.model';
import { Observable } from 'rxjs';
import { Response } from '../../../core/models/response.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  apiUrl = `${environment.API_SERVER_URL}/cliente`;

  constructor(private http: HttpClient) { }

  get(): Observable<Response<PersonaNatural[]>> {
    return this.http.get<Response<PersonaNatural[]>>(this.apiUrl);
  }
}