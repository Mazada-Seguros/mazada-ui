import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/pages/login/login.component';
import { RegisterComponent } from './features/auth/pages/register/register.component';
//import { ConfirmMailComponent } from './features/auth/pages/confirm-mail/confirm-mail.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { MainComponent } from './features/main/pages/main/main.component';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard/main', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    //{ path: 'confirm-mail', component: ConfirmMailComponent },
    //{ path: 'about', component: AboutComponent },
    //{
      //path: 'auth',
      //loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) // Lazy load AuthModule
    //},
    {
      path: 'dashboard',
      component: MainLayoutComponent,
      children: [
        { path: 'main', component: MainComponent },
      ]
    }
    //{ path: '**', component: PageNotFoundComponent }
  ];