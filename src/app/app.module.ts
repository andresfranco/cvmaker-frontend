import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing}   from './app.routes';
import { AppComponent } from './app.component';
import { LanguagesListComponent } from './languages-list/languages-list.component';
import { MasterpageAdminComponent } from './masterpage-admin/masterpage-admin.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import {AuthenticationService}from './security/authentication.service';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminCurricullumComponent } from './admin-curricullum/admin-curricullum.component';
import { AlertModule,DropdownModule,AccordionModule,CollapseModule } from 'ng2-bootstrap';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { TRANSLATION_PROVIDERS, TranslatePipe, TranslateService }   from './translate';

@NgModule({
  declarations: [
    AppComponent,
    LanguagesListComponent,
    MasterpageAdminComponent,
    LoginAdminComponent,
    AdminLayoutComponent,
    AdminHomeComponent,
    AdminCurricullumComponent,
    AdminTemplateComponent,
    TranslatePipe 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
    AlertModule.forRoot(),
    DropdownModule.forRoot(),
    AccordionModule.forRoot(),
    CollapseModule.forRoot()
  ],
  providers: [AuthenticationService,TRANSLATION_PROVIDERS, TranslateService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
