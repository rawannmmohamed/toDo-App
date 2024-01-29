import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { TokenService } from '../services/token.service';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';


export const HttpInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenService = inject(TokenService);
  const router = inject(Router);

  tokenService.isAthentication.subscribe({
    next: (value) => {
      if (value) {
        req = req.clone({
          setHeaders: {
            Authorization: `Bearer ${tokenService.getToken()}`,
          }
        })
      }
    }
  })

  return next(req).pipe(
    catchError((e: HttpErrorResponse) => {
      if (e.status === 401) {
         tokenService.removeToken();
         router.navigate(['/login'])
      }
      const error = e.error?.error?.message || e.statusText;      
      return throwError(() => error);
    }))

};
