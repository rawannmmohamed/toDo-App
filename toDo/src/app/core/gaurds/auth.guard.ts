import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '../services/token.service';
import { inject } from '@angular/core';


export const authGuard: CanActivateFn = (route, state) => {

   const  token = inject(TokenService);
   const router = inject(Router);

   TokenService.isAthentication.subscribe({
    next: (value: any) => {
      if (value) {
        router.navigate(['/todo']);
      }
      else{
        router.navigate(['']);
      }
    }
  })

  return true;
};
