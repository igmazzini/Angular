import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  constructor() { }

  equipo: object[] = [{
    nombre: 'Nacho',
    apellido: 'Mazzini',
    edad: 32
  },
  {
    nombre: 'Nerina',
    apellido: 'Salite',
    edad: 24
  },
  {
    nombre: 'Luis',
    apellido: 'Cienpies',
    edad: 104
  }
  ]

  /**
   * obtenerEquipo
   */
  public obtenerEquipo() {
    return this.equipo;
  }

  /**
   * obtenerMiembro
   */
  public obtenerMiembro(id:number) {
    return this.equipo[id];
  }

}
