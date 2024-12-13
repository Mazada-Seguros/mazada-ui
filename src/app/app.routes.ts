import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/pages/login/login.component';
import { RegisterComponent } from './features/auth/pages/register/register.component';
//import { ConfirmMailComponent } from './features/auth/pages/confirm-mail/confirm-mail.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { MainComponent } from './features/main/pages/main/main.component';

import { ListLeadsComponent } from './features/leads/pages/list-leads/list-leads.component';
import { ListVentasComponent } from './features/ventas/pages/list-ventas/list-ventas.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { PersonaNaturalComponent } from './features/clientes/pages/persona-natural/persona-natural.component';
import { PersonaJuridicaComponent } from './features/clientes/pages/persona-juridica/persona-juridica.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
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
        { path: 'persona_juridica', component: PersonaJuridicaComponent },
        { path: 'persona_natural', component: PersonaNaturalComponent },
        { path: 'leads', component: ListLeadsComponent },
        { path: 'ventas', component: ListVentasComponent },
      ]
    },
    { path: '**', component: PageNotFoundComponent }
  ];