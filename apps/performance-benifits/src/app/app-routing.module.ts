import { RouterModule, Routes } from '@angular/router';

import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { LoginComponent } from './views/login/login.component';
import { NgModule } from '@angular/core';
import { PageLayoutModule } from './modules/page-layout/page-layout.module';
import { ResolverService } from './services/resolver.service';
import { ValidateTokenComponent } from './modules/page-layout/validate-token/validate-token.component';

// import { PageLayoutModule } from './modules/page-layout/page-layout.module';




const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'token/:token', component: ValidateTokenComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin', component: AdminLayoutComponent,
    resolve: { data: ResolverService },
    children: [
      {
        path: '',
       loadChildren: () => import ("./modules/page-layout/page-layout.module").then(m => m.PageLayoutModule) ,

       // loadChildren: '../modules/page-layout/page-layout.module#PageLayoutModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
