import { Component, OnInit } from '@angular/core';
import {EquipoService} from './../equipo.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.css']
})
export class DescripcionComponent implements OnInit {

  miembro:any;

  constructor(
    private _service:EquipoService,
    private _ruta:ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    let miembroId:number = Number(this._ruta.snapshot.paramMap.get('id'));   
    this.miembro = this._service.obtenerMiembro(miembroId);    
  }

}
