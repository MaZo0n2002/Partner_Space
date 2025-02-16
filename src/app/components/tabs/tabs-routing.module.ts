// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { TabsComponent } from './tabs.component';

// const routes: Routes = [
//   {
//     path: '',
//     component: TabsComponent,
//     children: [
//       {
//         path: 'home',
//         loadChildren: () => import('../../home/home.module').then(m => m.HomePageModule)
//     },
//       {
//         path: 'policies',
//         loadChildren: () => import('../../pages/policies/policies.module').then(m => m.PoliciesPageModule)
//       },
//       {
//         path: 'claims',
//         loadChildren: () => import('../../pages/claims/claims.module').then(m => m.ClaimsPageModule)
//       },
//       {
//         path: 'insurance',
//         loadChildren: () => import('../../pages/insurance/insurance.module').then(m => m.InsurancePageModule)
//       },
//       {
//         path: 'request',
//         loadChildren: () => import('../../pages/request/request.module').then(m => m.RequestPageModule)
//       },
//       {
//         path: 'settings',
//         loadChildren: () => import('../../pages/settings/settings.module').then(m => m.SettingsPageModule)
//       },
//       {
//         path: '',
//         redirectTo: 'home',
//         pathMatch: 'full'
//       }
//     ]
//   }
// ];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class TabsRoutingModule {}
