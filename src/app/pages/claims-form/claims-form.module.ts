import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClaimsFormPageRoutingModule } from './claims-form-routing.module';

import { ClaimsFormPage } from './claims-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClaimsFormPageRoutingModule
  ],
  declarations: [ClaimsFormPage]
})
export class ClaimsFormPageModule {}
