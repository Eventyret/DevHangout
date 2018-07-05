import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule, Routes } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SimpleNotificationsModule } from "angular2-notifications";
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxStripeModule } from "ngx-stripe";
import { environment } from "../environments/environment";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AddEducationComponent } from "./dashboard/education/add-education/add-education.component";
import { EditEducationComponent } from "./dashboard/education/edit-education/edit-education.component";
import { AddExperienceComponent } from "./dashboard/experience/add-experience/add-experience.component";
import { EditExperienceComponent } from "./dashboard/experience/edit-experience/edit-experience.component";
import { AddProfileComponent } from "./dashboard/profile/add-profile/add-profile.component";
import { DeleteAccountComponent } from "./dashboard/profile/delete-account/delete-account.component";
import { EditProfileComponent } from "./dashboard/profile/edit-profile/edit-profile.component";
import { ProfileComponent } from "./dashboard/profile/profile.component";
import { CommentsComponent } from "./feed/comments/comments.component";
import { FeedComponent } from "./feed/feed/feed.component";
import { PostsComponent } from "./feed/posts/posts.component";
import { LandingComponent } from "./landing/landing.component";
import { ProfilesComponent } from "./profiles/profiles.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { PageNotFoundComponent } from "./shared/page-not-found/page-not-found.component";
import { LoginComponent } from "./shared/register/login/login.component";
import { RegisterComponent } from "./shared/register/register.component";
import { SignupComponent } from "./shared/register/signup/signup.component";
import { FakeService } from "./shared/services/fake.service";
import { SupporterModalComponent } from "./shared/fab/supporter-modal/supporter-modal.component";
import { FabComponent } from "./shared/fab/fab.component";
import { InfoModalComponent } from "./shared/fab/info-modal/info-modal.component";
import { GithubService } from "./shared/services/github.service";
import { JwtModule } from "@auth0/angular-jwt";
import { AuthService } from "./shared/services/auth.service";
import { AuthGuard } from "./shared/services/auth-guard.service";
import { AvatarModule } from "ngx-avatar";


const routes: Routes = [
	{ path: "", component: LandingComponent, pathMatch: "full" },
	{ path: "login", component: LoginComponent, pathMatch: "full" },
	{ path: "profiles", component: ProfilesComponent, pathMatch: "full" },
	{ path: "signup", component: SignupComponent, pathMatch: "full" },
	{ path: "feed", component: FeedComponent, pathMatch: "full" },
	{ path: "profile/:id/:username", component: ProfileComponent, pathMatch: "full" },
	{ path: "profile/edit", component: EditProfileComponent },
	{ path: "profile/delete", component: DeleteAccountComponent },
	{ path: "auth", component: RegisterComponent },
	{ path: "dashboard", component: DashboardComponent, canActivate: [AuthGuard] },
	{ path: "donate", component: SupporterModalComponent },
	{ path: "donate-info", component: InfoModalComponent },
	{ path: "education/add", component: AddEducationComponent },
	{ path: "education/edit", component: EditEducationComponent },
	{ path: "experience/add", component: AddExperienceComponent },
	{ path: "experience/edit", component: EditExperienceComponent },
	{ path: "**", component: PageNotFoundComponent } // Page not found
];

@NgModule({
	declarations: [
		AppComponent,
		FooterComponent,
		NavbarComponent,
		DeleteAccountComponent,
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
		FabComponent,
		SupporterModalComponent,
		CommentsComponent,
		InfoModalComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		NgbModule.forRoot(),
		RouterModule.forRoot(routes),
		NgbModule.forRoot(),
		CommonModule,
		NgxSpinnerModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		NgxStripeModule.forRoot(environment.publish_api_key),
		SimpleNotificationsModule.forRoot({
			position: ["top", "right"],
			timeOut: 5000,
			showProgressBar: true,
			animate: "fromRight",
			clickToClose: true,
			pauseOnHover: true,
		}),
		JwtModule.forRoot({
			config: {
				tokenGetter: () => {
					return localStorage.getItem("token");
				  },
				  whitelistedDomains: [
					  "localhost:8000"
					],
				  blacklistedRoutes: [
					  "localhost:8000/api/token"
				  ]
			}
		}),
		AvatarModule
	],
	providers: [FakeService, GithubService, AuthService, AuthGuard],
	bootstrap: [AppComponent]
})
export class AppModule {}
