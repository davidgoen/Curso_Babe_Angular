import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'bbl-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {
  sNombre: string;
  user: any;
  constructor() { }

  ngOnInit() {
    this.sNombre = 'Pepe';
    this.user = {name: 'Jose', apellidos: 'Perez' };
  }

  btnBorrar() {
    this.sNombre = '';
  }

}

// Encapsula este componente de lo demas de fuera encapsulation: ViewEncapsulation.Native
// si lo pones en nativo no haria caso del css de Bootstrap solo del css propio, por defecto se pone ViewEncapsulation.Emulated
// Emulated solo cambiar dentro del objeto y no que lo que pongas del css salga fuera, lo que haria que cambiara toda la pagina
