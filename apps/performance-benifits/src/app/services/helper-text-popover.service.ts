import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperTextPopoverService {

  components: any[] = [];
  shouldHelperTextEnable: boolean = true;

  push(ele:any) {
    this.components.push(ele);
  }

  findIndex(id:any) {
    const idx = this.components.findIndex((t) => {
      return t.id === id;
    });
    return idx;
  }

  splice(idx:any) {
    this.components.splice(idx, 1);
  }

  getCompo() {
    return new BehaviorSubject<any[]>(this.components);
  }

}
