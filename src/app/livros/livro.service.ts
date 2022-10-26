import { Injectable } from '@angular/core';
import { Livro } from './livro.interface';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private livros: Livro[] = [
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

  getLivros() {
    return this.livros;
  }
}
