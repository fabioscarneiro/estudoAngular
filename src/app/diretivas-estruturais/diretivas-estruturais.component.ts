import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss'],
})
export class DiretivasEstruturaisComponent implements OnInit {
  public condition: boolean = true;

  public list: Array<{ nome: string }> = [
    { nome: 'Dener Troquatte' },
    { nome: 'José' },
    { nome: 'Isabel' },
  ];

  public nome: string = 'dener';
  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.condition = !this.condition;
    }, 2000);
  }
}
