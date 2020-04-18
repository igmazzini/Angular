import { Component, OnInit } from '@angular/core';
import { ConexionService } from './../../services/conexion.service';



@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  editarActive:boolean = false;
  tareaToUpdate:{name:'',descripcion:'',id:''};
  tareas: any;
  constructor(private _conexion: ConexionService) {
    this._conexion.obtenerTareas().subscribe(
      tareas=>{ this.tareas = tareas;}
    )
  }
  
  /**
   * eliminar
   */
  public eliminar(tarea) {
    this._conexion.eliminarTarea(tarea);
  }

  /**
   * editar
   */
  public editar(tarea) {
    this._conexion.editarTarea(tarea);
  }

  /**
   * activarEditar
   */
  public activarEditar(tarea) {
   
    this.editarActive = true;
    this.tareaToUpdate = tarea;
    
    
  }

  ngOnInit(): void {

  }

}
