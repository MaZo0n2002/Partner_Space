// claims-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClaimsPage } from './claims.page';

const routes: Routes = [
  {
    path: '', // Default route for the claims module
    component: ClaimsPage,
    children: [
      {
        path: 'claims-form', // Child route
        loadChildren: () => import('../claims-form/claims-form.module').then(m => m.ClaimsFormPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClaimsPageRoutingModule { }