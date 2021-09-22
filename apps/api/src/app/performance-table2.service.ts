import { Data1 } from '@nx-sagacity/util-interface';
import { Injectable } from '@nestjs/common';

const data: Data1[] = [

  {
  id:"1",
  name: 'Defects',
  received: 5,
  due: 0,
  actioned:4,
},
{
  id:"2",
  name: 'Defects',
  received: 4,
  due: 3,
  actioned:6,
},
{
  id:"3",
  name: 'FPNs',
  received: 2,
  due: 5,
  actioned:3,
}]


@Injectable()
export class PerformanceTable2Service {
getAllData1 = () => data;
  getData1 = (id: string) => data.find(data => data.id === id);
}
