import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.scss']
})
export class AutoComponent implements OnInit {

  @Input() autoMarca: string;
  @Input() autoModelo: string;
  @Input() autoColor1: string;
  @Input() autoColor2: string;
  @Input() autoAnio: number;

  constructor() {
  }

  ngOnInit() {

  }
}
