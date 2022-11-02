import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'livros-cadastro',
  templateUrl: './livros-cadastro.component.html',
  styleUrls: ['./livros-cadastro.component.css'],
})
export class LivrosCadastroComponent implements OnInit {
  livroForm: FormGroup = this.formBuilder.group({
    nome: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(200)],
    ],
    autor: [
      '',
      [Validators.minLength(3), Validators.maxLength(150), Validators.required],
    ],
    preco: 0,
    publicacao: '2000-01-01',
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.livroForm.valid);
    console.log(this.livroForm.value);
  }
}
