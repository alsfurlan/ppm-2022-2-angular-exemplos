import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livro } from './livro.interface';

@Injectable({
  providedIn: 'root',
})
export class LivroService {
  constructor(private http: HttpClient) { }

  getLivro(id: number): Observable<Livro> {
    return this.http.get<Livro>(`http://localhost:3000/livros/${id}`);
  }

  getLivros(): Observable<Livro[]> {
    return this.http.get<Livro[]>('http://localhost:3000/livros');
  }

  save(livro: Livro): Observable<Livro> {
    return this.http.post<Livro>('http://localhost:3000/livros', livro);
  }

  
  update(livro: Livro): Observable<Livro> {
    return this.http.put<Livro>(`http://localhost:3000/livros/${livro.id}`, livro);
  }

  remove({ id }: Livro): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/livros/${id}`);
  }
}
