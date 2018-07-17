import { Component, OnInit } from '@angular/core';
import {AutoServicio} from "../servicios/auto.servicio";

@Component({
  selector: 'app-libro',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.scss']
})
export class AutoComponent implements OnInit {

  autos = [];
  items = 4;
  paginas;
  autosMostrar;
  paginaActual: number = 1;

  constructor(private _libroServicio: AutoServicio) { }

  ngOnInit() {
    this._libroServicio.getAutos().subscribe(
      (result: any[]) => {
        this.autos = result;
        this.numeroPaginas();
        this.autosVisualizar();
      }
    );
  }

  numeroPaginas() {
    this.paginas = this.autos.length/this.items;
    if(!Number.isInteger(this.paginas)) {
      this.paginas = Number.parseInt(this.paginas + 1);
    }
  }

  autosVisualizar() {
    this.autosMostrar = this.autos.slice(this.paginaActual*this.items - this.items, this.paginaActual*this.items);
  }

  siguiente() {
    this.paginaActual += 1;
    this.autosVisualizar();
  }

  anterior() {
    this.paginaActual -= 1;
    this.autosVisualizar();
  }
}
