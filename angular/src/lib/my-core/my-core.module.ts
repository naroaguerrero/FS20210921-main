import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SizerComponent } from './components/sizer.component';
import { PIPES_CADENAS, ToComaDecimalPipe } from './pipes/cadenas.pipe';
import { DIRECTIVAS_ATRIBUTO } from './directives/atributos.directive';
import { UnlessDirective } from './directives/estructurales.directive';
import { MIS_VALIDADORES } from './directives/validadores.directive';

@NgModule({
  declarations: [
    SizerComponent,
    PIPES_CADENAS,
    DIRECTIVAS_ATRIBUTO,
    MIS_VALIDADORES,
    UnlessDirective,
    ToComaDecimalPipe
  ],
  exports: [
    SizerComponent,
    PIPES_CADENAS,
    DIRECTIVAS_ATRIBUTO,
    MIS_VALIDADORES,
    UnlessDirective,
    ToComaDecimalPipe,
  ],
  imports: [CommonModule],
})
export class MyCoreModule {}
