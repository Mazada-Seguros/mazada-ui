import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const roleGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Obtenemos el rol requerido desde las rutas
  const requiredRole = route.data?.['role'];

  // Validamos autenticación y rol
  if (authService.isAuthenticated() && authService.hasRole(requiredRole)) {
    return true;
  } else {
    console.log('Acceso denegado. Redirigiendo al login...');
    router.navigate(['/login']); // Redirige si no cumple
    return false;
  }
};