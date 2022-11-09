import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { DataHoraComponent } from './data-hora/data-hora.component';
import '@angular/common/locales/global/pt';
import { LivrosComponent } from './livros/livros.component';
import { HttpClientModule } from '@angular/common/http';
import { LivrosCadastroComponent } from './livros-cadastro/livros-cadastro.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: 'listagem',
    component: LivrosComponent
  },
  {
    path: 'cadastro',
    component: LivrosCadastroComponent
  },
  {
    path: 'edicao/:id',
    component: LivrosCadastroComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    DataHoraComponent,
    LivrosComponent,
    LivrosCadastroComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
  bootstrap: [AppComponent],
})
export class AppModule { }
