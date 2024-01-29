import { Injectable } from '@angular/core';
import { ILogin, ILoginResponse } from '../models/auth.model';
import { HttpClient } from '@angular/common/http';
import { apiEndPoint } from '../constants/CONST';
import { TokenService } from './token.service';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private tokenService:TokenService) { }

  onLogin(data:ILogin){
    return this.http.post<ILoginResponse>(`${apiEndPoint.AuthEndpoint.login}`, data).pipe(
      map((response)=>{
        if(response){
          this.tokenService.setToken(response.token)
        }
        return response;
      })
    )
  }
  onLogout(){
    return this.http.post<ILoginResponse>(`${apiEndPoint.AuthEndpoint.logout}`,'').subscribe({
      next:(res:any)=>this.tokenService.removeToken()
    })
  }
}
