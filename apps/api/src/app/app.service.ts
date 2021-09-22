import { Data } from '@nx-sagacity/util-interface';
import { Data1 } from '@nx-sagacity/util-interface';
import { Injectable } from '@nestjs/common';
const datas: Data[] = [

  {
    id: '1',
    name: 'Works start',
    Due: 11,
    Actioned: 3,
    Outstanding:8,

  },
  {
    id: '2',
    name: 'Works Stop',
    Due: 13,
    Actioned:10,
    Outstanding:3
  },
  {
    id: '3',
    name: 'Permit Modification Requests',
    Due: 9,
    Actioned: 8,
    Outstanding:1

  },
  {
    id: '3',
    name: 'Registrations',
    Due: 7,
    Actioned: 22,
    Outstanding: 5
  }
];

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
export class AppService {
  getAllDatas = () => datas;
  getData = (id: string) => datas.find(data => data.id === id);




  getAllData1 = () => data;
  getData1 = (id: string) => data.find(data => data.id === id);
}
