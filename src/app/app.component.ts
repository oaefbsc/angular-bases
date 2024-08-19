import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // Crea variables
  public title: string = 'Mi primera app de Angular';

  /* Usado en Lección 41
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
  */
}
