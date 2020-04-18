import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';

@Component({
  selector: 'app-lista-add',
  templateUrl: './lista-add.component.html',
  styleUrls: ['./lista-add.component.css']
})
export class ListaAddComponent implements OnInit {

  tarea: any = {
    name: '',
    descripcion: ''
  };
  constructor(private _conexion: ConexionService) {

  }

  ngOnInit(): void {
  }

  /**
   * agregar
   */
  public agregar() {
    if (this.tarea.name != '' && this.tarea.descripcion != '') {
      this._conexion.agregarTarea(this.tarea);
      this.tarea.name = '';
      this.tarea.descripcion = '';
    }

  }

}
