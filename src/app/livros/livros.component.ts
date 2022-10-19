import { Component, OnInit } from '@angular/core';
import { Livro } from './livro.interface';

@Component({
  selector: 'livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit {
  // JavaScript: O guia definitivo de David Flanagan
  // O melhor do JavaScript de Douglas Cockford
  // JavaScript Design Patterns de Addy Osmani 

  livros: Livro[] = [
    {
      nome: 'JavaScript: O guia definitivo',
      autor: 'David Flanagan',
      publicacao: new Date(2020, 3, 3),
      preco: 10.5,
    },
    {
      nome: 'O melhor do JavaScript',
      autor: 'Douglas Cockford',
      publicacao: new Date(2021, 0, 15),
    },
    {
      nome: 'JavaScript Design Patterns',
      autor: 'Addy Osmani',
      preco: 27.99,
    },
    {
      nome: 'Código Limpo',
      autor: 'Robert Martin'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
