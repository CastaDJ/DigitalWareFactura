import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Factura } from '../models/factura.model';

@Injectable({
  providedIn: 'root'
})
export class Facturaservice {
  private apiUrl = 'TU_ENDPOINT_AQUI'; // Reemplaza con la URL real de tu API

  constructor(private http: HttpClient) {}

  obtenerFacturas(): Observable<Factura[]> {
    return this.http.get<Factura[]>(this.apiUrl);
  }
}
