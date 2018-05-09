import { LoginComponent } from "./shared/register/login/login.component";
import { RegisterComponent } from "./shared/register/register.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProfileComponent } from "./dashboard/profile/profile.component";
import { FeedComponent } from "./feed/feed/feed.component";

import { PostsComponent } from "./feed/posts/posts.component";
import { LandingComponent } from "./landing/landing.component";
import { ProfilesComponent } from "./profiles/profiles.component";
import { PageNotFoundComponent } from "./shared/page-not-found/page-not-found.component";
import { SignupComponent } from "./shared/register/signup/signup.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CommonModule } from "@angular/common";
import { AddEducationComponent } from './dashboard/education/add-education/add-education.component';
import { EditEducationComponent } from './dashboard/education/edit-education/edit-education.component';
import { EditExperienceComponent } from './dashboard/experience/edit-experience/edit-experience.component';
import { AddExperienceComponent } from './dashboard/experience/add-experience/add-experience.component';
import { EditProfileComponent } from './dashboard/profile/edit-profile/edit-profile.component';
import { AddProfileComponent } from './dashboard/profile/add-profile/add-profile.component';

const routes: Routes = [
	{ path: "", component: LandingComponent, pathMatch: "full" },
	{ path: "login", component: LoginComponent, pathMatch: "full" },
	{ path: "signup", component: SignupComponent, pathMatch: "full" },
	{ path: "profile/:username", component: ProfileComponent, pathMatch: "full" },
	{ path: "auth", component: RegisterComponent },
	{ path: "dashboard", component: DashboardComponent },
	{ path: "**", component: PageNotFoundComponent } // Page not found
];

@NgModule({
	imports: [RouterModule.forRoot(routes), NgbModule.forRoot(), CommonModule],
	exports: [RouterModule],
	declarations: [
		DashboardComponent,
		ProfileComponent,
		FeedComponent,
		PostsComponent,
		RegisterComponent,
		LoginComponent,
		LandingComponent,
		ProfilesComponent,
		PageNotFoundComponent,
		SignupComponent,
		AddEducationComponent,
		EditEducationComponent,
		EditExperienceComponent,
		AddExperienceComponent,
		EditProfileComponent,
		AddProfileComponent,
	]
})
export class AppRoutingModule {}
