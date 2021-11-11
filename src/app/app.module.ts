import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';

import { AgencyComponent } from './agency/agency.component';
import { AgencyDetailComponent } from './agency-detail/agency-detail.component';
import { PaginateAgencyComponent } from './paginate-agency/paginate-agency.component';


@NgModule({
  declarations: [
    AppComponent,
    AgencyComponent,
    AgencyDetailComponent,
    PaginateAgencyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatListModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
