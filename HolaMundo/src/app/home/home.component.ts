import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  show = true;
  fondo = 'bg-dark';
  activo = '';
  cursos: string[] = ['html', 'angular', 'php'];
  alumnos: object[] = [{
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


  public activarPrimero() {
    //this.show = !this.show;
    this.activo = 'primero';
    this.cursos[1] = 'Angular';
  }

  public activarSegundo() {
    //this.show = !this.show;
    this.activo = 'segundo';
    this.cursos[1] = 'Vue';
  }


  ngOnInit(): void {
  }

}
