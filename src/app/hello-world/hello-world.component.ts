import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {
  nome: string = 'João';
  exibeNome: boolean = false;
  
  constructor() { }
  
  ngOnInit(): void {}
  
  clique() {
    this.exibeNome = true;
  }
  setNome(event: any) {
    this.nome = event.target.value;
    this.exibeNome = false;
  }

}
