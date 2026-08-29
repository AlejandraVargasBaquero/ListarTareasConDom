import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  num1: number = 0;
  num2: number = 0;
  operador: string = '+';
  resultado: number = 0;
  historial: string[] = [];

  operar() {
    switch (this.operador) {
      case '+':
        this.resultado = this.num1 + this.num2;
        break;
      case '-':
        this.resultado = this.num1 - this.num2;
        break;
      case '*':
        this.resultado = this.num1 * this.num2;
        break;
      case '/':
        this.resultado = this.num2 !== 0 ? this.num1 / this.num2 : NaN;
        break;
      case '%':
        this.resultado = this.num1 % this.num2;
        break;
      default:
        this.resultado = 0;
    }

    this.historial.unshift(
      `${this.num1} ${this.operador} ${this.num2} = ${this.resultado}`
    );
  }

  limpiarHistorial() {
    this.historial = [];
  }
}