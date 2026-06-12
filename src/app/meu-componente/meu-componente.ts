import { Component } from '@angular/core';

@Component({
  selector: 'app-meu-componente',
  imports: [],
  templateUrl: './meu-componente.html',
  styleUrl: './meu-componente.css',
})
export class MeuComponente {

// Comodidades

quarto1: string = "Suíte Master";
quarto2: string = "Quarto Standard";
camas: number = 2;
preco1: number = 380.00;
banheiro: boolean = true;}