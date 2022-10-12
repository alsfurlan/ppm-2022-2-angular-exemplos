import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'data-hora',
  templateUrl: './data-hora.component.html',
  styleUrls: ['./data-hora.component.css']
})
export class DataHoraComponent implements OnInit {

  dataHora: Date;
  // dataHoraString: string;
  valor: number;
  // valor: string;

  constructor() {
    // this.dataHoraString = new Date().toLocaleString();
    this.dataHora = new Date();
    // this.valor = new Intl.NumberFormat('pt-BR').format(2.54);
    this.valor = 2.54;
  }

  ngOnInit(): void {
  }

}
