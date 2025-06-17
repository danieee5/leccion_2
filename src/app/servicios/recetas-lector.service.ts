import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Foto } from '../interfaz/foto';


@Injectable({
  providedIn: 'root'
})
export class RecetasLectorService {
  private apiUrl = 'https://raw.githubusercontent.com/vjuradov/ejemploDatosConsumo/refs/heads/main/leccion-recetas.json';

  constructor(private http: HttpClient) { }

  getRecetas(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}