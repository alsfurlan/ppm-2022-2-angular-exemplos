import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livro } from './livro.interface';

@Injectable({
  providedIn: 'root',
})
export class LivroService {
  constructor(private http: HttpClient) {}

  getLivros(): Observable<Livro[]> {
    return this.http.get<Livro[]>('http://localhost:3000/livros');
  }

  save(livro: Livro): Observable<Livro> {
    return this.http.post<Livro>('http://localhost:3000/livros', livro);
  }
}
