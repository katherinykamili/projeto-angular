import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MeuComponente } from "./meu-componente/meu-componente";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MeuComponente],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Hóspedes');
}
