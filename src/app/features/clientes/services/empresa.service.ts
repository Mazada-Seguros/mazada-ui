import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PersonaJuridica } from '../models/persona-juridica.model';

import { environment } from '../../../../environments/environment';
import { Response } from '../../../core/models/response.model';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

   apiUrl = `${environment.API_SERVER_URL}/empresa`;
  
    constructor(private http: HttpClient) { }
  
    get(): Observable<Response<PersonaJuridica[]>> {
      return this.http.get<Response<PersonaJuridica[]>>(this.apiUrl);
    }
}
