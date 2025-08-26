import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardTableComponent } from './dashboard-table/dashboard-table.component';
import { DashboardTableViewComponent } from './dashboard-table-view/dashboard-table-view.component';

const routes: Routes = [
  { path: '', component: DashboardTableComponent },
  { path: 'details/:id', component: DashboardTableViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
