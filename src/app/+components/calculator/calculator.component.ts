import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { History } from './history'

@Component({
  selector: 'app-calculator',
  imports: [RouterLink],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  prev: string = '0';
  current: string = '0';
  op: string = '';
  isMoreOption: boolean = false;
  isHistory: boolean = false;
  history: Array<History> = [];

  dot() {
    if (!this.current.includes('.')) {
      this.current += '.';
    }
  }

  clear() {
    this.prev = '0';
    this.current = '0';
    this.op = '';
    this.history.splice(0,this.history.length);
  }

  clearEntry() {
    this.current = '0';
  }

  delete() {
    this.current = this.current.slice(0, -1);
    if (this.current.length <= 0) {
      this.current = '0';
    }
  }

  digit(o: string) {
    this.current = Number(this.current + o).toString();
  }

  operation(o: string) {
    this.prev = this.current;
    this.current = '0';
    this.op = o;
  }

  equaliz() {
    let a = Number(this.prev);
    let b = Number(this.current);
    let equaliz = '';

    switch (this.op) {
      case '+':
        equaliz = String(a + b);
        this.current = equaliz;
        break;
      case '/':
        equaliz = String(a / b);
        this.current = equaliz;
        break;
      case 'x':
        equaliz = String(a * b);
        this.current = equaliz;
        break;
      case '-':
        equaliz = String(a - b);
        this.current = equaliz;
        break;
    }

    this.history.push(new History(this.prev, this.current, this.op, equaliz));
  }

  sin() {
    this.current = Math.sin(Number(this.current)).toString();
  }

  cos() {
    this.current = Math.cos(Number(this.current)).toString();
  }

  tan() {
    this.current = Math.tan(Number(this.current)).toString();
  }

  sqrt() {
    this.current = Math.sqrt(Number(this.current)).toString();
  }
}
