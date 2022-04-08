import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss'],
})
export class DataBindingComponent implements OnInit {
  public nome: string = 'Fábio';
  public idade: number = 25;
  public checkedDisable: boolean = false
  constructor() {}

  public alertaInfo(valor: string){
    alert(valor);
  }
  ngOnInit(): void {}
}
