import { FooterComponent } from "./shared/components/footer/footer.component";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule, Routes } from "@angular/router";
import { JwtModule } from "@auth0/angular-jwt";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SimpleNotificationsModule } from "angular2-notifications";
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxStripeModule } from "ngx-stripe";
import { TruncateModule } from "@yellowspot/ng-truncate";

import { environment } from "../environments/environment";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AddEducationComponent } from "./dashboard/education/add-education/add-education.component";
import { EditEducationComponent } from "./dashboard/education/edit-education/edit-education.component";
import { AddExperienceComponent } from "./dashboard/experience/add-experience/add-experience.component";
import { EditExperienceComponent } from "./dashboard/experience/edit-experience/edit-experience.component";
import { AddProfileComponent } from "./dashboard/profile/add-profile/add-profile.component";
import { EditProfileComponent } from "./dashboard/profile/edit-profile/edit-profile.component";
import { ProfileComponent } from "./dashboard/profile/profile.component";
import { CommentsComponent } from "./feed/comments/comments.component";
import { FeedComponent } from "./feed/feed/feed.component";
import { PostsComponent } from "./feed/posts/posts.component";
import { LandingComponent } from "./landing/landing.component";
import { ProfilesComponent } from "./profiles/profiles.component";
import { FabComponent } from "./shared/components/fab/fab.component";
import { InfoModalComponent } from "./shared/components/fab/info-modal/info-modal.component";
import { SupporterModalComponent } from "./shared/components/fab/supporter-modal/supporter-modal.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { LoginComponent } from "./shared/components/login/login.component";
import { SignupComponent } from "./shared/components/signup/signup.component";
import { AuthGuard } from "./shared/services/auth/auth-guard.service";
import { AuthService } from "./shared/services/auth/auth.service";
import { FakeService } from "./shared/services/api/fake.service";
import { GithubService } from "./shared/services/api/github.service";
import { AvatarModule } from "ng2-avatar";
import { TestimonialsComponent } from "./landing/components/testimonials/testimonials.component";
import { SectionsComponent } from "./landing/components/sections/sections.component";
import { LandingPageService } from "./landing/service/landing-page.service";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { InfiniteScrollModule } from "ngx-infinite-scroll";


const routes: Routes = [
	{ path: "", component: LandingComponent, pathMatch: "full" },
	{ path: "login", component: LoginComponent, pathMatch: "full" },
	{ path: "profiles", component: ProfilesComponent, pathMatch: "full", canActivate: [AuthGuard]  },
	{ path: "signup", component: SignupComponent, pathMatch: "full" },
	{ path: "feed", component: FeedComponent, pathMatch: "full", canActivate: [AuthGuard]  },
	{ path: "profile/:id/:username", component: ProfileComponent, pathMatch: "full" },
	{ path: "profile/edit", component: EditProfileComponent, canActivate: [AuthGuard] },
	{ path: "dashboard", component: DashboardComponent, canActivate: [AuthGuard] },
	{ path: "donate", component: SupporterModalComponent },
	{ path: "donate-info", component: InfoModalComponent },
	{ path: "education/add", component: AddEducationComponent, canActivate: [AuthGuard]  },
	{ path: "education/edit", component: EditEducationComponent , canActivate: [AuthGuard] },
	{ path: "experience/add", component: AddExperienceComponent, canActivate: [AuthGuard] },
	{ path: "experience/edit", component: EditExperienceComponent, canActivate: [AuthGuard]  },
	{ path: "**", component: PageNotFoundComponent } // Page not found
];

@NgModule({
	declarations: [
		AppComponent,
		FooterComponent,
		NavbarComponent,
		DashboardComponent,
		ProfileComponent,
		FeedComponent,
		PostsComponent,
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
		InfoModalComponent,
		TestimonialsComponent,
		SectionsComponent,
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
		TruncateModule,
		NgxStripeModule.forRoot(environment.publish_api_key),
		SimpleNotificationsModule.forRoot({
			position: ["top", "right"],
			timeOut: 5000,
			showProgressBar: true,
			animate: "scale",
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
		AvatarModule.forRoot(),
		Ng2SearchPipeModule,
		InfiniteScrollModule,
	],
	providers: [FakeService, GithubService, AuthService, AuthGuard, LandingPageService],
	bootstrap: [AppComponent]
})
export class AppModule {}
