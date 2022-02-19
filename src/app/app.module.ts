import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Assignment2DataBindingComponent } from './Assignment2DataBinding/Assignment2DataBinding.component';
import { Assignment3 } from './assignment3/assignment3.component';
import { HealthCheckComponent } from './healthcheck/healthcheck.component';

@NgModule({
  declarations: [
    AppComponent,
    HealthCheckComponent,
    Assignment2DataBindingComponent,
    Assignment3
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
