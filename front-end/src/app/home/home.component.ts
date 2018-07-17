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

  constructor() { }

  ngOnInit() {

  }
}
