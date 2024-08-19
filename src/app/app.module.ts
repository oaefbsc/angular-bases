import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

// Importa componente
  // import { CounterComponent } from './counter/counter.component';
// Se modifica pues ahora CounterComponent es un módulo
import { CounterModule } from './counter/counter.module';

// Se agrega nuevo módulo: HeroesModule
import { HeroesModule } from './heroes/heroes.module';


// Importa componente
  // import { HeroComponent } from './heroes/hero/hero.component';

// Agregado por Angular CLI
// Importa componente
  //import { ListComponent } from './heroes/list/list.component';

/*
  La funcionalidad de HeroComponent y ListComponent están
  ligadas al concepto Heroes. Al crear un módulo HeroesModule
  esta funcionalidad queda empaquetada en dicho módulo , por
  esta razón desaparecen de app.module.ts
*/


@NgModule({
  declarations: [
    AppComponent,
    // Agrega nuevo componente
      // CounterComponent
    // Se elimina CounterComponent pues ahora es un módulo

    // Agrega nuevo componente
      // HeroComponent,

    // Agregado por Angular CLI
    // Agrega nuevo componente
    //ListComponent,

    /*
      Los componentes anteriores se eliminan
      pues ahora están declarados en el módulo
      HeroesModule para encapsular su funcionalidad
    */



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // Agrega nuevo módulos
    CounterModule,
    // Agrega nuevo módulo
    HeroesModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
