import { Component } from "@angular/core";


@Component({
  // Configura el componente
  selector: 'app-counter',  // alias
  // template: '<h1>Hola Counter</h1>', // string html inicial
  template: `
  <h3>Counter: {{ counter }}</h3>


  <button (click)="increaseBy(+1)">+1</button>
  <button (click)="resetCounter()">Reset</button>
  <button (click)="increaseBy(-1)">-1</button>
  `
})


export class CounterComponent{

  public counter: number = 10;

  // Crea método para modificar el contador
  increaseBy( value: number ): void {
    this.counter += value;
  }
  // Crea método para reiniciar el contador
  resetCounter(): void {
    // Valor por default del contador
    this.counter = 10;
  }
}
