import { CommonModule, DatePipe } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, Story, addDecorator, componentWrapperDecorator, moduleMetadata } from '@storybook/angular';

import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/app/materials/material.module';
import { PerformanceTable2Component } from './performance-table2.component'
import { PerformanceTable2DataModel } from './performances-table2-model';
import { ServerApiInterfaceServiceService } from 'src/app/services/common/server-api-interface-service.service';
import { ValidationService } from 'src/app/services/common/validation.service';
import { action } from '@storybook/addon-actions';

export default {
    component: PerformanceTable2Component,
    decorators: [
      moduleMetadata({
        // 👇 Imports both components to allow component composition with storybook
        declarations: [PerformanceTable2Component],
        imports: [FormsModule, HttpClientModule,    CommonModule,
          MaterialModule,
          FormsModule,
          ReactiveFormsModule ],
        providers: [FormBuilder,ServerApiInterfaceServiceService,
          DatePipe,ValidationService
        ],
      }),

    ],
    // excludeStories: /.*Data$/,
    title: 'PerformanceTable2Component',
  } as Meta;


// export const actionsData = {
//     onGetValues: action('getValues'),
// };


const Template: Story<PerformanceTable2Component> = (args: PerformanceTable2Component) => ({
  component: PerformanceTable2Component,
  props: args,
});


export const Default = Template.bind({});
Default.args = {
  isInitalstate:true
  ,
  ...PerformanceTable2DataModel.getInstance(), isSelfDataLoad:true
  };


export const Demo = Template.bind({});
Demo.args = {

isStoryBookMode:false,

dataModel:{...PerformanceTable2DataModel.getInstance(),

data:[ {name: "Comments",received :8 ,due: 0,actioned: 0},
{name: 'demo2', received :8 ,due: 0,actioned: 0},
{name: 'Permit Modification Requests', received :8 ,due: 0,actioned: 0},
{name: 'Registrations', received :8 ,due: 0,actioned: 0}]
},

isSelfDataLoad:false,
}



