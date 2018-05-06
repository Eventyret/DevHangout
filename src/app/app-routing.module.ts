import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProfileComponent } from "./dashboard/profile/profile.component";
import { EditComponent } from "./dashboard/profile/edit/edit.component";
import { AddComponent } from "./dashboard/profile/add/add.component";
import { FeedComponent } from "./feed/feed/feed.component";
import { PostsComponent } from "./feed/posts/posts.component";
import { RegisterComponent } from "./signup-login/register/register.component";
import { LoginComponent } from "./signup-login/login/login.component";
import { LandingComponent } from "./landing/landing.component";
import { ProfilesComponent } from "./profiles/profiles.component";
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { PageNotFoundComponent } from "./shared/page-not-found/page-not-found.component";

const routes: Routes = [
	{ path: "", component: LandingComponent, pathMatch: "full" },
	{ path: "**", component: PageNotFoundComponent } // Page not found
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule, NavbarComponent, HeaderComponent, FooterComponent],
	declarations: [
		DashboardComponent,
		ProfileComponent,
		EditComponent,
		AddComponent,
		FeedComponent,
		PostsComponent,
		RegisterComponent,
		LoginComponent,
		LandingComponent,
		ProfilesComponent,
		HeaderComponent,
		FooterComponent,
		NavbarComponent,
		PageNotFoundComponent
	]
})
export class AppRoutingModule {}
