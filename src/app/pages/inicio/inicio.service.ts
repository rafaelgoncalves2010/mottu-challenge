import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/models/inicio.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InicioService {

  private API =  environment.API;

  constructor(private http: HttpClient) { 
  }

  todosPersonagens() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.API}/character`,
  );}

  pesquisarPorNome(nome : string) : Observable<ApiResponse>{
    return this.http.get<ApiResponse>(`${this.API}/character?name=${nome}`)
  }

  proximaPagina(url : string): Observable<ApiResponse>{
    return this.http.get<ApiResponse>(url)
  }
}
