import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatFormFieldModule,
  MatSelectModule,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  declarations: []
})
export class MaterialModule {}
