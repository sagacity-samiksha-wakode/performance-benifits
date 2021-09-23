import { CommonModule, DatePipe } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, Story, addDecorator, componentWrapperDecorator, moduleMetadata } from '@storybook/angular';

import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../../../materials/material.module';
import { PerformanceTableComponent } from './performance-table.component';
import { PerformanceTableDataModel } from './performances-table-model';
import { PrintHook } from '@angular/flex-layout';
import { ServerApiInterfaceServiceService } from '../../../services/server-api-interface-service.service';
import { ValidationService } from '../../../services/validation.service';
// import { ServerApiInterfaceServiceService } from 'src/app/services/common/server-api-interface-service.service';
// import { ValidationService } from 'src/app/services/common/validation.service';
import { action } from '@storybook/addon-actions';

// import { DataFormModel } from 'src/app/modules/widget-app/dataForm/data-form/data-form-model';









// import { initializeWorker, mswDecorator } from 'msw-storybook-addon';









// import { rest } from 'msw'


// initializeWorker();
// addDecorator(mswDecorator);




export default {
    component: PerformanceTableComponent,
    decorators: [
      moduleMetadata({
        // 👇 Imports both components to allow component composition with storybook
        declarations: [PerformanceTableComponent],
        imports: [FormsModule, HttpClientModule,    CommonModule,
          MaterialModule,
          FormsModule,
          ReactiveFormsModule ],
        providers: [FormBuilder,ServerApiInterfaceServiceService,
          DatePipe,ValidationService
        ],
      }),
      // 👇 Wraps our stories with a decorator
     // componentWrapperDecorator(story => `<div style="margin: 3em">${story}</div>`),
    ],
    // excludeStories: /.*Data$/,
    title: 'PerformanceTableComponent',
  } as Meta;


// export const actionsData = {
//     onGetValues: action('getValues'),
// };


const Template: Story<PerformanceTableComponent> = (args: PerformanceTableComponent) => ({
  component: PerformanceTableComponent,
  props: args,
});


export const Default = Template.bind({});
Default.args = {
  // isInitalstate:true,
  dataModel:{ ...PerformanceTableDataModel.getInstance(),}
  //  isSelfDataLoad:true
  };


export const Demo = Template.bind({});
Demo.args = {

// isStoryBookMode:false,

dataModel:{...PerformanceTableDataModel.getInstance(),

data:[ {name: 'demo', Due: 10, Actioned: 0, Outstanding:0},
{name: 'demo2', Due: 0, Actioned:0, Outstanding:0},
{name: 'Permit Modification Requests', Due: 9,  Actioned: 8, Outstanding:1},
{name: 'Registrations', Due: 7,  Actioned: 22, Outstanding: 5}]},
// isSelfDataLoad:true,
};

// Demo.args.dataModel.title = 'sfd'

