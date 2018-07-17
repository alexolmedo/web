import {Component, Input, OnInit} from '@angular/core';
import {ConductorServicio} from "../servicios/conductor.servicio";

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.component.html',
  styleUrls: ['./conductor.component.scss']
})
export class ConductorComponent implements OnInit {

  @Input() conductorNombres: string;
  @Input() conductorApellidos: string;
  @Input() conductorFechaNacimiento: string;
  @Input() conductorNumeroAutos: number;
  @Input() conductorLicenciaValida: boolean;

  constructor() {
  }

  ngOnInit() {

  }

}
