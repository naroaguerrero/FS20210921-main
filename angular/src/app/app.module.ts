import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DemosComponent } from './demos/demos.component';
import { FormsModule } from '@angular/forms';
import { ERROR_LEVEL, LoggerService } from 'src/lib/my-core/services/logger.service';
import { DinamicoComponent } from './dinamico/dinamico.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { MyCoreModule } from 'src/lib/my-core/services';
import { MainModule } from './main';
import { CommonModule } from '@angular/common';
import { SecurityModule } from './security/security.module';
import { environment } from 'src/environments/environment';
import { CommonServicesModule } from './common-services/common-services.module';
import { FormularioComponent } from './formulario/formulario.component'

@NgModule({
  declarations: [
    AppComponent,
    DemosComponent,
    DinamicoComponent,
    CalculadoraComponent,
    FormularioComponent,
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule, MyCoreModule,
    MainModule, CommonModule, SecurityModule,
    CommonServicesModule, MainModule
  ],
  providers: [
    LoggerService,
    {provide: ERROR_LEVEL, useValue: environment.ERROR_LEVEL},
    {provide: LOCALE_ID, useValue: 'es-ES'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
