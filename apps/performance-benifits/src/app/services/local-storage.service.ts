import { Injectable } from '@angular/core';
import { LOCAL_STORAGE_DATA_KEY } from '../app-constants';
import { LoginAPIResponse } from '../../../src/app/models/dto/user-management/login-response';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getObject<T>(key: string): T | null {
    const valueJSON:any = localStorage.getItem(key);
    return JSON.parse(valueJSON);
  }
  setObject<T>(key: string, data: T): void {
    localStorage.setItem(key, JSON.stringify(data));
  }
  removeObject<T>(key: string): void {
    localStorage.removeItem(key);
  }

  saveCurrentUser(userinfo: LoginAPIResponse) {
    this.setObject<LoginAPIResponse>(LOCAL_STORAGE_DATA_KEY.USERINFO, userinfo);
  }

  getCurrentUser(): LoginAPIResponse | null{

    return this.getObject<LoginAPIResponse>(LOCAL_STORAGE_DATA_KEY.USERINFO);
  }
  clearLocalStorage() {
    localStorage.clear();
  }
}
