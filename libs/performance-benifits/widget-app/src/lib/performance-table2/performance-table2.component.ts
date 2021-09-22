import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Data1 } from '@nx-sagacity/util-interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'nx-sagacity-performance-table2',
  templateUrl: './performance-table2.component.html',
  styleUrls: ['./performance-table2.component.css']
})
export class PerformanceTable2Component  {

  constructor(private http:HttpClient) {
console.log(this.sourceData);
  }

  // ngOnInit(): void {
  // }

  sourceData = this.http.get<Data1[]>('/api/games');
}
