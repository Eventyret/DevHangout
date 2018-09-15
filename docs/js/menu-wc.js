'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`<nav>
    <ul class="list">
        <li class="title">
            <a href="index.html" data-type="index-link">Developers Hangout</a>
        </li>
        <li class="divider"></li>
        ${ isNormalMode ? `<div id="book-search-input" role="search">
    <input type="text" placeholder="Type to search">
</div>
` : '' }
        <li class="chapter">
            <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
            <ul class="links">
                    <li class="link">
                        <a href="overview.html" data-type="chapter-link">
                            <span class="icon ion-ios-keypad"></span>Overview
                        </a>
                    </li>
                    <li class="link">
                        <a href="index.html" data-type="chapter-link">
                            <span class="icon ion-ios-paper"></span>README
                        </a>
                    </li>
                    <li class="link">
                            <a href="todo.html"
                        data-type="chapter-link">
                            <span class="icon ion-ios-paper"></span>TODO
                        </a>
                    </li>
                    <li class="link">
                        <a href="dependencies.html"
                            data-type="chapter-link">
                            <span class="icon ion-ios-list"></span>Dependencies
                        </a>
                    </li>
            </ul>
        </li>
        <li class="chapter modules">
            <a data-type="chapter-link" href="modules.html">
                <div class="menu-toggler linked" data-toggle="collapse"
                    ${ isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                    <span class="icon ion-ios-archive"></span>
                    <span class="link-name">Modules</span>
                    <span class="icon ion-ios-arrow-down"></span>
                </div>
            </a>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                    <li class="link">
                        <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-AppModule-aa0c6b5c77c069f90ef545cd86619f4a"' : 'data-target="#xs-components-links-module-AppModule-aa0c6b5c77c069f90ef545cd86619f4a"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-AppModule-aa0c6b5c77c069f90ef545cd86619f4a"' : 'id="xs-components-links-module-AppModule-aa0c6b5c77c069f90ef545cd86619f4a"' }>
                                        <li class="link">
                                            <a href="components/AddEducationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddEducationComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/AddExperienceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddExperienceComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/DevelopersListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DevelopersListComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/DonationsMobileViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DonationsMobileViewComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/EditEducationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">EditEducationComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/EditExperienceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">EditExperienceComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/EditProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">EditProfileComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/EducationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">EducationComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/EducationMobileViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">EducationMobileViewComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ExperienceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ExperienceComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ExperienceMobileViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ExperienceMobileViewComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/FabComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FabComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/FakeGithubPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FakeGithubPage</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/GithubComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">GithubComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/HomePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomePage</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/InfoModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">InfoModalComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/NavbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavbarComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProfileComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/SectionsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SectionsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/SessionExpiredComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SessionExpiredComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/SessionExpiredPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SessionExpiredPage</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/SignupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SignupComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/SkillsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SkillsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/SocialIconsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SocialIconsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/SupporterModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SupporterModalComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TestimonialsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TestimonialsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ThankYouModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ThankYouModalComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-AppModule-aa0c6b5c77c069f90ef545cd86619f4a"' : 'data-target="#xs-injectables-links-module-AppModule-aa0c6b5c77c069f90ef545cd86619f4a"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-AppModule-aa0c6b5c77c069f90ef545cd86619f4a"' : 'id="xs-injectables-links-module-AppModule-aa0c6b5c77c069f90ef545cd86619f4a"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FakeService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>FakeService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/GithubService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>GithubService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/HomePageService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>HomePageService</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                    </li>
            </ul>
        </li>
                <li class="chapter">
                    <div class="simple menu-toggler" data-toggle="collapse"
                        ${ isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"' }>
                        <span class="icon ion-md-arrow-round-down"></span>
                        <span>Injectables</span>
                        <span class="icon ion-ios-arrow-down"></span>
                    </div>
                    <ul class="links collapse"
                    ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                            <li class="link">
                                <a href="injectables/AuthService.html" data-type="entity-link">AuthService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/DataService.html" data-type="entity-link">DataService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/FakeService.html" data-type="entity-link">FakeService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/GithubService.html" data-type="entity-link">GithubService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/HomePageService.html" data-type="entity-link">HomePageService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/ScrollToTopService.html" data-type="entity-link">ScrollToTopService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/SharedService.html" data-type="entity-link">SharedService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/SkillsService.html" data-type="entity-link">SkillsService</a>
                            </li>
                    </ul>
                </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
                 ${ isNormalMode ? 'data-target="#guards-links"' : 'data-target="#xs-guards-links"' }>
            <span class="icon ion-ios-lock"></span>
            <span>Guards</span>
            <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
                ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                <li class="link">
                    <a href="guards/AuthGuard.html" data-type="entity-link">AuthGuard</a>
                </li>
            </ul>
            </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
                ${ isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"' }>
                <span class="icon ion-md-information-circle-outline"></span>
                <span>Interfaces</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                    <li class="link">
                        <a href="interfaces/Card.html" data-type="entity-link">Card</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Donations.html" data-type="entity-link">Donations</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Education.html" data-type="entity-link">Education</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Experience.html" data-type="entity-link">Experience</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/File.html" data-type="entity-link">File</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Folder.html" data-type="entity-link">Folder</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Profile.html" data-type="entity-link">Profile</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Project.html" data-type="entity-link">Project</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Repo.html" data-type="entity-link">Repo</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Section.html" data-type="entity-link">Section</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Skill.html" data-type="entity-link">Skill</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/StripeToken.html" data-type="entity-link">StripeToken</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Tab.html" data-type="entity-link">Tab</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Token.html" data-type="entity-link">Token</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/User.html" data-type="entity-link">User</a>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"' }>
                <span class="icon ion-ios-cube"></span>
                <span>Miscellaneous</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                    <li class="link">
                      <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                    </li>
                    <li class="link">
                      <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                    </li>
            </ul>
        </li>
            <li class="chapter">
                <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
            </li>
        <li class="chapter">
            <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
        </li>
    </ul>
</nav>`);
        this.innerHTML = tp.strings;
    }
});
