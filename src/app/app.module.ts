import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { DataHoraComponent } from './data-hora/data-hora.component';
import '@angular/common/locales/global/pt';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    DataHoraComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }