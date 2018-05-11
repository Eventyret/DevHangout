import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgxSpinnerModule } from "ngx-spinner";
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
import { FeedComponent } from "./feed/feed/feed.component";
import { PostsComponent } from "./feed/posts/posts.component";
import { LandingComponent } from "./landing/landing.component";
import { ProfilesComponent } from "./profiles/profiles.component";
import { FakeService } from "./shared/services/fake.service";
import { FooterComponent } from "./shared/footer/footer.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { PageNotFoundComponent } from "./shared/page-not-found/page-not-found.component";
import { LoginComponent } from "./shared/register/login/login.component";
import { RegisterComponent } from "./shared/register/register.component";
import { SignupComponent } from "./shared/register/signup/signup.component";
import { SupporterComponent } from "./shared/supporter/supporter.component";
import { SupporterModalComponent } from "./shared/supporter/supporter-modal/supporter-modal.component";

const routes: Routes = [
	{ path: "", component: LandingComponent, pathMatch: "full" },
	{ path: "login", component: LoginComponent, pathMatch: "full" },
	{ path: "profiles", component: ProfilesComponent, pathMatch: "full" },
	{ path: "signup", component: SignupComponent, pathMatch: "full" },
	{ path: "profile/:id/:username", component: ProfileComponent, pathMatch: "full" },
	{ path: "profile/edit", component: EditProfileComponent },
	{ path: "profile/delete", component: DeleteAccountComponent },
	{ path: "auth", component: RegisterComponent },
	{ path: "dashboard", component: DashboardComponent },
	{ path: "donate", component: SupporterModalComponent },
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
		SupporterComponent,
		SupporterModalComponent
	],
	imports: [
		BrowserModule,
		NgbModule.forRoot(),
		RouterModule.forRoot(routes),
		NgbModule.forRoot(),
		CommonModule,
		NgxSpinnerModule,
		HttpClientModule
	],
	providers: [FakeService],
	bootstrap: [AppComponent]
})
export class AppModule {}
