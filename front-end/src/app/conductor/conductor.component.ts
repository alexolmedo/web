import { Component, OnInit } from '@angular/core';
import {ConductorServicio} from "../servicios/conductor.servicio";

@Component({
  selector: 'app-autor',
  templateUrl: './conductor.component.html',
  styleUrls: ['./conductor.component.scss']
})
export class ConductorComponent implements OnInit {

  conductores = [];
  items = 2;
  paginas;
  conductoresMostrar;
  paginaActual: number = 1;

  constructor(private _autorServicio: ConductorServicio) { }

  ngOnInit() {
    this._autorServicio.getConductores().subscribe(
      (result: any[]) => {
        this.conductores = result;
        this.numeroPaginas();
        this.conductoresVisualizar();
      }
    );
  }

  numeroPaginas() {
    this.paginas = this.conductores.length/this.items;
    if(!Number.isInteger(this.paginas)) {
      this.paginas = Number.parseInt(this.paginas + 1);
    }
  }

  conductoresVisualizar() {
    this.conductoresMostrar = this.conductores.slice(this.paginaActual*this.items - this.items, this.paginaActual*this.items);
  }

  siguiente() {
    this.paginaActual += 1;
    this.conductoresVisualizar();
  }

  anterior() {
    this.paginaActual -= 1;
    this.conductoresVisualizar();
  }
}
