// import { EventEmitter } from 'events';

import { EventEmitter } from "@angular/core";

export class PerformanceTable2ConfigModel {
  static getInstance<T>(): PerformanceTable2ConfigModel {
    let model = new PerformanceTable2ConfigModel();
    return model
  }

  public static readonly CALLER_TO_COMP_REFRESH_DATA = "REFRESH_DATA"

  CompToCaller = new EventEmitter();
  CallerToComp = new EventEmitter();
  EventAction = new Map();
}

export class PerformanceTable2DataModel {
    globalParameters: any;
    isGlobalParams: any;
    isSelfDataLoad: any;
    data:any;

    promoterPrefix: any;
    widgetStyle: any;
    title1:any;

    static getInstance<T>(): PerformanceTable2DataModel {
      let model = new PerformanceTable2DataModel();
      model.isSelfDataLoad = false;

      model.data = [];

      model.data = [
        {
        name: "Defects",
        received :6 ,
          due: 5,
          actioned: 3
      },
        {
          name: "Comments",
          received :8 ,
          due: 0,
          actioned: 0
        },
        {
          name: "FPNs",
          received :4,
          due: 4,
          actioned:8
        },

        ]
      model.globalParameters = new Map<any, any>();
      return model;
    }
  }

  export class  PerformanceTable2Data {

    name?: string;
    Due? : number;
    Actioned?: number;
    received?: number;


  }


