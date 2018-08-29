import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule, Routes } from "@angular/router";
import { JwtModule } from "@auth0/angular-jwt";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { TruncateModule } from "@yellowspot/ng-truncate";
import { SimpleNotificationsModule } from "angular2-notifications";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxStripeModule } from "ngx-stripe";

import { environment } from "../environments/environment";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AddEducationComponent } from "./dashboard/education/add-education/add-education.component";
import { EditEducationComponent } from "./dashboard/education/edit-education/edit-education.component";
import { AddExperienceComponent } from "./dashboard/experience/add-experience/add-experience.component";
import { EditExperienceComponent } from "./dashboard/experience/edit-experience/edit-experience.component";
import { FakeGithubPage } from "./github-page/github-page";
import { SectionsComponent } from "./home/components/sections/sections.component";
import { TestimonialsComponent } from "./home/components/testimonials/testimonials.component";
import { HomePage } from "./home/home.page";
import { HomePageService } from "./home/service/home-page.service";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { DevelopersListComponent } from "./developers-list/developers-list.component";
import { FabComponent } from "./shared/components/fab/fab.component";
import { InfoModalComponent } from "./shared/components/fab/info-modal/info-modal.component";
import { SupporterModalComponent } from "./shared/components/fab/supporter-modal/supporter-modal.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { LoginComponent } from "./shared/components/login/login.component";
import { SessionExpiredComponent } from "./shared/components/session-expired/session-expired.component";
import { SignupComponent } from "./shared/components/signup/signup.component";
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { FakeService } from "./shared/services/api/fake.service";
import { GithubService } from "./shared/services/api/github.service";
import { AuthGuard } from "./shared/services/auth/auth-guard.service";
import { AuthService } from "./shared/services/auth/auth.service";
import { EditProfileComponent } from "./dashboard/edit-profile/edit-profile.component";
import { ProfileComponent } from "./userprofile/userprofile.component";
import { SessionExpiredPage } from "./expired-page/expired-page";

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
	{ path: "donate-info", component: InfoModalComponent },
	{ path: "github/:username/:repo", component: FakeGithubPage },
	{ path: "education/add", component: AddEducationComponent, canActivate: [AuthGuard] },
	{ path: "education/edit/:id", component: EditEducationComponent, canActivate: [AuthGuard] },
	{ path: "experience/add", component: AddExperienceComponent, canActivate: [AuthGuard] },
	{ path: "experience/edit/:id", component: EditExperienceComponent, canActivate: [AuthGuard] },
	{ path: "session-expired", component: SessionExpiredPage },
	{ path: "**", component: PageNotFoundComponent } // Page not found
];

@NgModule({
	declarations: [
		AppComponent,
		FooterComponent,
		NavbarComponent,
		DashboardComponent,
		ProfileComponent,
		LoginComponent,
		HomePage,
		DevelopersListComponent,
		PageNotFoundComponent,
		SignupComponent,
		AddEducationComponent,
		EditEducationComponent,
		EditExperienceComponent,
		AddExperienceComponent,
		EditProfileComponent,
		FabComponent,
		SupporterModalComponent,
		InfoModalComponent,
		TestimonialsComponent,
		SectionsComponent,
		FakeGithubPage,
		SessionExpiredComponent,
		SessionExpiredPage
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		RouterModule.forRoot(routes),
		NgbModule.forRoot(),
		CommonModule,
		NgxSpinnerModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		TruncateModule,
		NgxStripeModule.forRoot(environment.publish_api_key),
		SimpleNotificationsModule.forRoot({
			position: ["top", "right"],
			timeOut: 5000,
			showProgressBar: true,
			clickToClose: true,
			pauseOnHover: true
		}),
		JwtModule.forRoot({
			config: {
				 tokenGetter() {
					return localStorage.getItem("token");
				},
				whitelistedDomains: ["localhost:8000", "backend.devhangout.co", "devhangout.herokuapp.com"],
				blacklistedRoutes: ["localhost:8000/api/token", "backend.devhangout.co/api/token", "devhangout.herokuapp.com/api/token"]
			}
		}),
		Ng2SearchPipeModule,
		InfiniteScrollModule
	],
	providers: [FakeService, GithubService, AuthService, AuthGuard, HomePageService],
	bootstrap: [AppComponent]
})
export class AppModule {}
