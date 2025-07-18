import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Facturaservice } from '../../services/facturaService';
import { Factura } from '../../models/factura.model';

@Component({
  selector: 'app-lista-facturas',
  imports: [CommonModule],
  templateUrl: './lista-facturas.html',
  styleUrl: './lista-facturas.css'
})
export class ListaFacturas implements OnInit{
  facturas: Factura[] = [];
  cargando = false;
  error: string | null = null;

  private facturaService = inject(Facturaservice);

  ngOnInit(): void {
    this.cargarFacturas();
  }

  cargarFacturas(): void {
    this.cargando = true;
    this.error = null;
    
    this.facturaService.obtenerFacturas().subscribe({
      next: (facturas: Factura[]) => {
        this.facturas = facturas;
        this.cargando = false;
      },
      error: (err: any) => {
        this.error = 'Error al cargar las facturas';
        this.cargando = false;
        console.error(err);
      }
    });
  }

  formatearFecha(fecha: string): string {
    return new Date(fecha).toLocaleDateString('es-ES');
  }

  formatearMoneda(valor: number): string {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR'
    }).format(valor);
  }
}
