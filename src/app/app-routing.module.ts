import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePage } from "./home-page/home-page";
import { LoginComponent } from "./shared/components/login/login.component";
import { SessionExpiredComponent } from "./shared/components/session-expired/session-expired.component";
import { DevelopersListComponent } from "./developerslist-page/developerslist-page";
import { SignupComponent } from "./shared/components/signup/signup.component";
import { ProfileComponent } from "./userprofile/userprofile.component";
import { AuthGuard } from "./shared/services/auth/auth-guard.service";
import { EditProfileComponent } from "./dashboard-page/components/edit-profile/edit-profile.component";
import { DashboardComponent } from "./dashboard-page/dashboard.component";
import { SupporterModalComponent } from "./shared/components/fab/supporter-modal/supporter-modal.component";
import { InfoModalComponent } from "./shared/components/fab/info-modal/info-modal.component";
import { ThankYouModalComponent } from "./shared/components/fab/thank-you-modal/thank-you-modal.component";
import { FakeGithubPage } from "./github-page/github-page";
import { AddEducationComponent } from "./dashboard-page/components/education/add-education/add-education.component";
import { EditEducationComponent } from "./dashboard-page/components/education/edit-education/edit-education.component";
import { AddExperienceComponent } from "./dashboard-page/components/experience/add-experience/add-experience.component";
import { EditExperienceComponent } from "./dashboard-page/components/experience/edit-experience/edit-experience.component";
import { SkillsComponent } from "./dashboard-page/components/skills/skills.component";
import { SessionExpiredPage } from "./expired-page/expired-page";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
	{ path: "", component: HomePage, pathMatch: "full" },
	{ path: "login", component: LoginComponent, pathMatch: "full" },
	{ path: "expired", component: SessionExpiredComponent, pathMatch: "full" },
	{ path: "profiles", component: DevelopersListComponent, pathMatch: "full" },
	{ path: "signup", component: SignupComponent, pathMatch: "full" },
	{ path: "profile/:id/:username", component: ProfileComponent, pathMatch: "full", canActivate: [AuthGuard] },
	{ path: "profile/edit", component: EditProfileComponent, canActivate: [AuthGuard] },
	{ path: "dashboard", component: DashboardComponent, canActivate: [AuthGuard] },
	{ path: "donate", component: SupporterModalComponent },
	{ path: "donate/info", component: InfoModalComponent },
	{ path: "donate/thank-you", component: ThankYouModalComponent },
	{ path: "github/:username/:repo", component: FakeGithubPage },
	{ path: "education/add", component: AddEducationComponent, canActivate: [AuthGuard] },
	{ path: "education/edit/:id", component: EditEducationComponent, canActivate: [AuthGuard] },
	{ path: "experience/add", component: AddExperienceComponent, canActivate: [AuthGuard] },
	{ path: "experience/edit/:id", component: EditExperienceComponent, canActivate: [AuthGuard] },
	{ path: "skills/edit/:id", component: SkillsComponent, canActivate: [AuthGuard] },
	{ path: "session-expired", component: SessionExpiredPage },
	{ path: "**", component: PageNotFoundComponent } // Page not found
];

@NgModule({
  imports: [
	RouterModule.forRoot(routes)

  ],
  declarations: [],
  exports: [
	RouterModule
  ]
})
export class AppRoutingModule { }
