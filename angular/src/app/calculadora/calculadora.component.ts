import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss'],
})
export class CalculadoraComponent implements OnInit {
  result: string = '0';

  constructor() {}
  add(key: string): void {
    if (this.result === '0') this.result = key;
    else this.result += key;
  }

  calc(): void {
    this.result = eval(this.result);
  }

  del(): void {
    this.result = '0';
  }
  ngOnInit(): void {}
}
