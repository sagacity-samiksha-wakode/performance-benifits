import { Meta, Story, moduleMetadata } from '@storybook/angular';

import { Data } from '@nx-sagacity/util-interface';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PerformanceTableComponent } from './performance-table.component';

export default {
  title: 'PerformanceTableComponent',
  component: PerformanceTableComponent,
  decorators: [
    moduleMetadata({
      imports: [HttpClientModule,MatToolbarModule],
      providers:[HttpClient,]
    })
  ],
} as Meta<PerformanceTableComponent>;

const Template: Story<PerformanceTableComponent> = (args: PerformanceTableComponent) => ({
  component: PerformanceTableComponent,
  props: args,
});


export const Intial = Template.bind({});
 Intial.args = {
  isInitalstate:true
  ,
  };

  export const Default = Template.bind({});
  Default.args = {
    isStoryBookMode:false,

  title:'Performance Table',

  data:[ {id:"1",name: 'Works start', Due: 11, Actioned: 3, Outstanding:8}
 ],


 isInitalstate:false,

  };


