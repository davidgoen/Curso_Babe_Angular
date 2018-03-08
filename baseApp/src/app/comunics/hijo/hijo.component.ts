import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'bbl-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
  @Input() nombre: string;
  @Output() respuesta: EventEmitter<string>;
  miNombre: string;
  constructor() {
    this.respuesta = new EventEmitter();
  }

  ngOnInit() {
  }

  btnRespuesta() {
    this.respuesta.emit(this.miNombre);
  }

}

// Decorador input permite hacer input de variables externas, en este caso de una variable del padre
