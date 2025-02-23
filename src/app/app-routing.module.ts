import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  // Public routes (Unauthenticated Users)
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'landing',
    loadChildren: () => import('./pages/landing/landing.module').then(m => m.LandingPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./pages/reset-password/reset-password.module').then(m => m.ResetPasswordPageModule)
  },

  // Protected routes inside LayoutComponent (Authenticated Users)
  {
    path: 'app', 
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'policies',
        loadChildren: () => import('./pages/policies/policies.module').then(m => m.PoliciesPageModule)
      },
      {
        path: 'claims',
        loadChildren: () => import('./pages/claims/claims.module').then(m => m.ClaimsPageModule),
       },
      {
        path: 'insurance',
        loadChildren: () => import('./pages/insurance/insurance.module').then(m => m.InsurancePageModule)
      },
      {
        path: 'request',
        loadChildren: () => import('./pages/request/request.module').then(m => m.RequestPageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsPageModule)
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' }, // ✅ Default authenticated route
      
    ]
  },
  


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
