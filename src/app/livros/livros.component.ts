import { Component, Inject, OnInit } from '@angular/core';
import { Livro } from './livro.interface';
import { LivroService } from './livro.service';

@Component({
  selector: 'livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit {
  livros: Livro[] = [];
  
  constructor(
    private livroService: LivroService
  ) { 
    this.livros = this.livroService.getLivros();
  }

  ngOnInit(): void {
  }

}
