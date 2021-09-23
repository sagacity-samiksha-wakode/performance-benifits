import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-performance-chart',
  templateUrl: './performance-chart.component.html',
  styleUrls: ['./performance-chart.component.css']
})
export class PerformanceChartComponent implements OnInit {

  @Input() title?:string;
  // @Input() Data:any=[
  //   ['Immediate', 0],
  //   ['Minor', 0],
  //  ['Standard', 0],
  //  ['Major', 0]
  // ];
// @Input() data:any;
@Input() isInitalstate?:boolean;
  backgroundColor :any;
  color:any;
  height:any;
  width:any;
  border:any


  constructor() { }



  ngOnInit(): void {

    // if(!this.isInitalstate)
    // this.Data=this.data;
    this.addBarSpans();
  }

  Data:any = [
    ['Immediate', 70],
   ['Minor', 28],
  ['Standard', 90],
  ['Major', 55]
];


     addBarSpans() {
    const bars = document.getElementsByClassName('equalizer-bar');
    const equalizer:any = document.getElementById("equalizer");

    for (let i = 0; i < this.Data.length; i++) {
        let html = '';
        for (let j = 0; j < 10; j++) {
          let number= Number((this.Data[i][1]/10).toFixed());
          if(j < number){
            html += '<span class="active"></span>';
          }else{
             html += '<span></span>';
          }
        }

        equalizer.innerHTML += `<div class="equalizer-bar-wrapper"><div class="equalizer-bar">` + html + `</div><div ><span>` + this.Data[i][0] + `</span><br><span>` + this.Data[i][1] + `%</span></div></div>`;

    }

  }
}
