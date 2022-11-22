import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { NosotrosComponent } from './modules/nosotros/nosotros.component';
import { ProductosComponent } from './modules/productos/productos.component';
import { ReservasComponent } from './modules/reservas/reservas.component';

const routes: Routes = [
  {path: '', loadChildren: ()=> import('./modules/home/home.module').then(m => m.HomeModule)},
  {path: 'home', component:HomeComponent},
  {path: 'nosotros', component:NosotrosComponent},
  {path: 'productos', component:ProductosComponent},
  {path: 'reservas', component:ReservasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
