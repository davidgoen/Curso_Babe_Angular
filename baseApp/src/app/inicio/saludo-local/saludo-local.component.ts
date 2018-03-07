import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'bbl-saludo-local',
  templateUrl: './saludo-local.component.html',
  styleUrls: ['./saludo-local.component.css']
})
export class SaludoLocalComponent implements OnInit {

  @ViewChild('LocNombre') sName: ElementRef;
  constructor() { }

  ngOnInit() {
    console.log(this.sName);
  }

}
// Se trae al decorador la variablen creada en el html desde su padre @ViewChild('LocNombre') sName: ElementRef;
