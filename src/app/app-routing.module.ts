import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { EditComponent } from './dashboard/profile/edit/edit.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [DashboardComponent, ProfileComponent, EditComponent]
})
export class AppRoutingModule { }
