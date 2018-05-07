import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
	declarations: [AppComponent, FooterComponent, NavbarComponent],
	imports: [BrowserModule, AppRoutingModule, NgbModule.forRoot()],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
