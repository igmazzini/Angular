import { Component, OnInit } from '@angular/core';
import {EquipoService} from './../equipo.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  equipo:object[] = [];
  constructor(private _service:EquipoService) {
    this.equipo = _service.obtenerEquipo();
   }

  ngOnInit(): void {
  }

}
