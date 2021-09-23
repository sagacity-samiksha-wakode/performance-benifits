import {BehaviorSubject, Observable} from 'rxjs';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PerformanceTable2ConfigModel, PerformanceTable2DataModel } from './performances-table2-model';

export interface PeriodicElement {
  name: string;
  received: number;
  due: number;
  actioned: number;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {name: 'Defects', received: 1, due: 2, actioned:5},
//   {name: 'Comments', received: 2,  due:5, actioned:6},
//   {name: 'FPNs', received: 3,  due: 6, actioned: 5},

// ];



@Component({
  selector: 'app-performance-table2',
  templateUrl: './performance-table2.component.html',
  styleUrls: ['./performance-table2.component.css']
})
export class PerformanceTable2Component implements OnInit {


  @Input() title:string="Performance Table-2";

@Input() isInitalstate?:boolean;



  constructor() { }

  ngOnInit(): void {
    this.startInIt();
    console.log(this.dataModel?.data);

  }

  startInIt()
  {
    this.dataModel = PerformanceTable2DataModel.getInstance();
  }


 @Input()  dataModel!: PerformanceTable2DataModel;
  @Input() configModel!: PerformanceTable2ConfigModel;


  displayedColumns: string[] = ['name' ,'Received', 'Due', 'Outstanding'];

}

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */







