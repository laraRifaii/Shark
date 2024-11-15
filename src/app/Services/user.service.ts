import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _isLoggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn.asObservable();

  constructor() {
     // Check if user is logged in (e.g., from local storage)
     const storedLoginState = localStorage.getItem('isLoggedIn');
     if (storedLoginState) {
       this._isLoggedIn.next(JSON.parse(storedLoginState));
     }
  }

  login() {
      this._isLoggedIn.next(true);
    localStorage.setItem('isLoggedIn', JSON.stringify(true));
  }

  logout() {
    this._isLoggedIn.next(false);
    localStorage.setItem('isLoggedIn', JSON.stringify(false));
  }
}
