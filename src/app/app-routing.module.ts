import { noUndefined } from '@angular/compiler/src/util';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/component/not-found/not-found.component';
import { ContactanosComponent } from './shopping/contactanos/contactanos.component';
import { InicioComponent } from './shopping/inicio/inicio.component';
import { NosotrosComponent } from './shopping/nosotros/nosotros.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { TiendaComponent } from './shopping/tienda/tienda.component';

const routes: Routes = [
    {path:'shopping',  component:ShoppingComponent,
  children:[
    {path:'inicio', component:InicioComponent},
    {path:'tienda', component:TiendaComponent},
    {path:'nosotros', component:NosotrosComponent},
    {path:'contacto', component:ContactanosComponent}
  ]},
     {path:'', component:ShoppingComponent},
     {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }