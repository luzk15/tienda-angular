import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { NavbarComponent } from './shopping/navbar/navbar.component';
import { InicioComponent } from './shopping/inicio/inicio.component';
import { TiendaComponent } from './shopping/tienda/tienda.component';
import { NosotrosComponent } from './shopping/nosotros/nosotros.component';
import { ContactanosComponent } from './shopping/contactanos/contactanos.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingComponent,
    NavbarComponent,
    InicioComponent,
    TiendaComponent,
    NosotrosComponent,
    ContactanosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
