import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgencyComponent } from './agency/agency.component';
import { AgencyDetailComponent } from './agency-detail/agency-detail.component';
import { PaginateAgencyComponent } from './paginate-agency/paginate-agency.component';


const routes: Routes = [
  { path: 'agency', redirectTo: 'agency', pathMatch: 'full'},
  { path: 'agency', component: AgencyComponent },
  { path: 'agency-detail/:Id', component: AgencyDetailComponent },
  { path: 'paginate-agency', component: PaginateAgencyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
