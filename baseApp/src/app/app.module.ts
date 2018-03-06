import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { InicioComponent } from './inicio/inicio.component';
import { AboutModule } from './about/about.module';
import { InicioModule } from './inicio/inicio.module';
import { AboutComponent } from './about/about.component';
import { CatalogoComponent } from './catalogo/catalogo.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    InicioModule,
    AboutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
