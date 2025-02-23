// claims-form-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClaimsFormPage } from './claims-form.page';

const routes: Routes = [
  {
    path: '',
    component: ClaimsFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClaimsFormPageRoutingModule { }