import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendaRoutingModule } from './agenda-routing.module';
import { AgendaComponent } from './agenda.component';
import { TareasComponent } from './tareas/tareas.component';

@NgModule({
  imports: [
    CommonModule,
    AgendaRoutingModule
  ],
  declarations: [AgendaComponent, TareasComponent]
})
export class AgendaModule { }
