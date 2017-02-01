import { RouterModule } from '@angular/router';
import {LoginAdminComponent} from './login-admin/login-admin.component';
import {AdminLayoutComponent}from './admin-layout/admin-layout.component';
import {AdminHomeComponent}from './admin-home/admin-home.component';
import {AdminCurricullumComponent}from './admin-curricullum/admin-curricullum.component';
import{AdminTemplateComponent} from './admin-template/admin-template.component';
const APP_ROUTES = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component:LoginAdminComponent },
    { path: 'admin2', component:AdminTemplateComponent},
    { path: 'admin', component:AdminLayoutComponent,children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: AdminHomeComponent},
      { path: 'curricullum', component: AdminCurricullumComponent}
    ]}
];

export const routing= RouterModule.forRoot(APP_ROUTES);