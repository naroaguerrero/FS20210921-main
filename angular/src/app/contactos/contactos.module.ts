import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonServicesModule } from '../common-services';
import { MyCoreModule } from 'src/lib/my-core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([]),
    MyCoreModule,
    CommonServicesModule,
  ],
})
export class ContactoModule {}
