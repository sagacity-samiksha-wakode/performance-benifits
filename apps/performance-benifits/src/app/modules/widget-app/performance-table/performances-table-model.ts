// import { EventEmitter } from 'events';

import { EventEmitter } from "@angular/core";

export class PerformanceTableConfigModel {
  static getInstance<T>(): PerformanceTableConfigModel {
    let model = new PerformanceTableConfigModel();
    return model
  }

  public static readonly CALLER_TO_COMP_REFRESH_DATA = "REFRESH_DATA"

  CompToCaller:any = new EventEmitter();
  CallerToComp:any = new EventEmitter();
  EventAction = new Map();
}

export class PerformanceTableDataModel {
    globalParameters: any;
    isGlobalParams: any;
    isSelfDataLoad: any;
    data:any;

    promoterPrefix: any;
    widgetStyle: any;
    title1:any;

    static getInstance<T>(): PerformanceTableDataModel {
      let model = new PerformanceTableDataModel();
      model.isSelfDataLoad = false;

      model.data = [];

      model.data = [
        {
        name: "Works start",
        Due :4 ,
        Actioned: 6,
        Outstanding: 5
      },
        {
          name: "Works Stop",
          Due :7 ,
          Actioned: 5,
          Outstanding: 4,
        },
        {
          name: "Permit Modification Requests",
          Due :6 ,
          Actioned: 5,
          Outstanding: 3
        },
        {
          name: "Registrations",
          Due :8 ,
          Actioned: 3,
          Outstanding: 0
        }
        ]
      model.globalParameters = new Map<any, any>();
      return model;
    }
  }

  export class  PerformanceTableData {

    name?: string;
    Due? : number;
    Actioned?: number;
    Outstanding?: number;


  }


