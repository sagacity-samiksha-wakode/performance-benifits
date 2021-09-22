import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Data } from '@nx-sagacity/util-interface';
import { HttpClient } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';

// export interface PeriodicElement {
//   name: string;
//   Due: number;
//   Actioned: number;
//   Outstanding: number;
// }






@Component({
  selector: 'nx-sagacity-performance-table',
  templateUrl: './performance-table.component.html',
  styleUrls: ['./performance-table.component.css']
})
export class PerformanceTableComponent implements OnInit{


  @Input() isStoryBookMode:any=false;

  @Input() title:any;

    // @Input() sourceData = this.http.get<Data[]>('/api/games');
    @Input() sourceData = this.http.get<Data[]>('/api/games');
    @Input() data:any;
    @Input() isInitalstate:any;

  constructor(private http:HttpClient) {}

  ngOnInit(): void {
    if(this.isStoryBookMode)
    {
      console.log(this.data);
      this.sourceData=this.data;
    }





  }




}

