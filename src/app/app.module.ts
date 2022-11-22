import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './modules/navbar/navbar.component';
import { FooterComponent } from './modules/footer/footer.component';
import { ProductosComponent } from './modules/productos/productos.component';
import { ReservasComponent } from './modules/reservas/reservas.component';
 
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ProductosComponent,
    ReservasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
}) 
export class AppModule { }
