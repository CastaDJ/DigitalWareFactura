import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaFacturas } from "./components/lista-facturas/lista-facturas";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListaFacturas],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('facturacion');
}
