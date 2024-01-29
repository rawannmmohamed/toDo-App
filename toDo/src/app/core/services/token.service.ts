import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { constants } from '../constants/CONST';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  isAthentication: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  static isAthentication: any;

  constructor() { 
    const token = this.getToken();
    if (token){
      this.updateToken(true);
    }
  }

  setToken(token: string) {
    this.updateToken(true);
    localStorage.setItem(constants.CURRENT_TOKEN, token);
  }
  getToken():string | null{
    return localStorage.getItem(constants.CURRENT_TOKEN);
  }
  removeToken(){
    this.updateToken(false);
    localStorage.removeItem(constants.CURRENT_TOKEN);
  }

  updateToken(status:boolean){
   this.isAthentication.next(status);
  }


}
