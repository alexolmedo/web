import { Component, OnInit } from '@angular/core';
import {UsuarioServicio} from "../servicios/usuario.servicio";
import {ConductorServicio} from "../servicios/conductor.servicio";
import {AutoServicio} from "../servicios/auto.servicio";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [UsuarioServicio, ConductorServicio, AutoServicio]
})
export class HomeComponent implements OnInit {

  nombreBuscar;

  usuarios = [];
  itemsUsuarios = 4;
  paginasUsuarios;
  usuariosMostrar;
  paginaActualUsuario: number = 1;

  conductores = [];
  itemsConductores = 2;
  paginasConductores;
  conductoresMostrar;
  paginaActualConductor: number = 1;

  autos = [];
  itemsAutos = 4;
  paginasAutos;
  autosMostrar;
  paginaActualAuto: number = 1;

  constructor(private _usuarioServicio: UsuarioServicio,
              private _conductorServicio: ConductorServicio,
              private _autoServicio: AutoServicio) { }

  ngOnInit() {
    this._usuarioServicio.getUsuarios().subscribe(
      (result: any[]) => {
        this.usuarios = result;
        this.paginasUsuarios = this.numeroPaginas(this.usuarios, this.itemsUsuarios);
        this.usuariosMostrar = this.datosVisualizar(this.usuarios, this.paginaActualUsuario, this.itemsUsuarios);
      }
    )

    this._conductorServicio.getConductores().subscribe(
      (result: any[]) => {
        this.conductores = result;
        this.paginasConductores = this.numeroPaginas(this.conductores, this.itemsConductores);
        this.conductoresMostrar = this.datosVisualizar(this.conductores, this.paginaActualConductor, this.itemsConductores);
      }
    )

    this._autoServicio.getAutos().subscribe(
      (result: any[]) => {
        this.autos = result;
        this.paginasAutos = this.numeroPaginas(this.autos, this.itemsAutos);
        this.autosMostrar = this.datosVisualizar(this.autos, this.paginaActualAuto, this.itemsAutos);
      }
    )
  }

  buscar() {
    this._usuarioServicio.getUsuarioBuscar(this.nombreBuscar).subscribe(
      (result: any[]) => {
        this.usuarios = result;
        this.paginasUsuarios = this.numeroPaginas(this.usuarios, this.itemsUsuarios);
        this.usuariosMostrar = this.datosVisualizar(this.usuarios, this.paginaActualUsuario, this.itemsUsuarios);
      }
    );

    this._conductorServicio.getConductorBuscar(this.nombreBuscar).subscribe(
      (result: any[]) => {
        this.conductores = result;
        this.paginasConductores = this.numeroPaginas(this.conductores, this.itemsConductores);
        this.conductoresMostrar = this.datosVisualizar(this.conductores, this.paginaActualConductor, this.itemsConductores);
      }
    );

    this._autoServicio.getAutoBuscar(this.nombreBuscar).subscribe(
      (result: any[]) => {
        this.autos = result;
        this.paginasAutos = this.numeroPaginas(this.autos, this.itemsAutos);
        this.autosMostrar = this.datosVisualizar(this.autos, this.paginaActualAuto, this.itemsAutos);
      }
    );
  }

  numeroPaginas(lista: any[], items): number {
    let paginas = lista.length/items;
    if(!Number.isInteger(paginas)) {
      paginas = paginas + 1;
      paginas = Number.parseInt(paginas.toString());
    }
    return paginas;
  }

  datosVisualizar(lista: any[], paginaActual, items): any [] {
    let usuariosMostrar = lista.slice(paginaActual*items - items, paginaActual*items);
    return usuariosMostrar;
  }

  siguienteUsuario() {
    this.paginaActualUsuario += 1;
    this.usuariosMostrar = this.datosVisualizar(this.usuarios, this.paginaActualUsuario, this.itemsUsuarios)
  }

  anteriorUsuario() {
    this.paginaActualUsuario -= 1;
    this.usuariosMostrar = this.datosVisualizar(this.usuarios, this.paginaActualUsuario, this.itemsUsuarios)
  }

  siguienteAutor() {
    this.paginaActualConductor += 1;
    this.conductoresMostrar = this.datosVisualizar(this.conductores, this.paginaActualConductor, this.itemsConductores)
  }

  anteriorAutor() {
    this.paginaActualConductor -= 1;
    this.conductoresMostrar = this.datosVisualizar(this.conductores, this.paginaActualConductor, this.itemsConductores)
  }

  siguienteLibro() {
    this.paginaActualAuto += 1;
    this.autosMostrar = this.datosVisualizar(this.autos, this.paginaActualAuto, this.itemsAutos)
  }

  anteriorLibro() {
    this.paginaActualAuto -= 1;
    this.autosMostrar = this.datosVisualizar(this.autos, this.paginaActualAuto, this.itemsAutos)
  }
}
