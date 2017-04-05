import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { StandardComponent } from './standard/standard.component';
import {routing} from './app.routing';
import {RouterModule} from '@angular/router';
import { AdminNavigationComponent } from './admin/admin-navigation/admin-navigation.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SubmissionComponent } from './submission/submission.component';
import { SubmissionsComponent } from './submissions/submissions.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    StandardComponent,
    AdminNavigationComponent,
    HomeComponent,
    NavigationComponent,
    SubmissionComponent,
    SubmissionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }