import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import localeEsExtra from '@angular/common/locales/extra/es';
registerLocaleData(localeEs, 'es', localeEsExtra);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemosComponent } from './demos/demos.component';
import { FormsModule } from '@angular/forms';
import { DinamicoComponent } from './dinamico/dinamico.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ERROR_LEVEL, LoggerHTTPService, LoggerService, MyCoreModule } from 'src/lib/my-core';
import { MainModule } from './main';
import { CommonServicesModule } from './common-services';
import { SecurityModule } from './security';
import { environment } from 'src/environments/environment';
import { FormularioComponent } from './formulario/formulario.component';
import { CommonComponentModule } from './common-component';
import { ClienteFormularioComponent } from './cliente-formulario/cliente-formulario.component';
import { HttpClientModule } from '@angular/common/http'
import { ContactoModule } from './contactos/contactos.module';





@NgModule({
  declarations: [
    AppComponent,
    DemosComponent,
    DinamicoComponent,
    CalculadoraComponent,
    FormularioComponent,
    ClienteFormularioComponent,
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    AppRoutingModule, MyCoreModule, MainModule, CommonServicesModule, CommonComponentModule,
    SecurityModule, ContactoModule
  ],
  providers: [
    LoggerService,
    // { provide: LoggerService, useClass: LoggerHTTPService },
    { provide: ERROR_LEVEL, useValue: environment.ERROR_LEVEL },
    { provide: LOCALE_ID, useValue: 'es-ES'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
