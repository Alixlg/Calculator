import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  prev: string = '0';
  current: string = '0';
  op: string = '';
  isMoreOption: boolean = false;

  dot() {
    if (!this.current.includes('.')) {
      this.current += '.';
    }
  }

  clear() {
    this.prev = '0';
    this.current = '0';
    this.op = '';
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

    switch (this.op) {
      case '+':
        this.current = String(a + b);
        break;
      case '/':
        this.current = String(a / b);
        break;
      case 'x':
        this.current = String(a * b);
        break;
      case '-':
        this.current = String(a - b);
        break;
    }
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
