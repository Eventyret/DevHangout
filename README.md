![Developers Hangout](https://raw.githubusercontent.com/Eventyret/DevHangout/develop/src/assets/logo-share.png)

Are you a lonesome developer? Sitting at work or maybe in your own room typing away the code? Do you wish that you could meet fellow developers instead of hundreds of Facebook groups and LinkedIn Groups? Well, Developers Hangout have ya covered, it’s a community made by a developer for developers!


# [Developers Hangout Website](https://www.devhangout.co)
### [More indept documentation created with compodoc](https://eventyret.github.io/DevHangout)
#### This documentation will cover the following
- Methods and functions in detail
- Components
- Services
- Injections
- Guards
- Interfaces

*This is built with [Compodoc - The missing documentation tool for your Angular application](https://compodoc.app/)*

## UX

The UX is made with simplicity in mind, it's meant to be easy to navigate and simple information with icons to process.

### The Dashboard

The Dashboard is the main area for a user to edit all of their profile. Simple buttons that provide the user with a modal for editing, adding skills, experience, education and their profile details.

It also comes with a simple table in desktop mode to have an overview of all the information. As tables are not good looking for the user experience on mobile, I chose to switch this to cards as its easier for the user to identify and work with.


### Developers List

The Developers list is a simple card list showing all developers registered + 1000 fake users. We have added infinite scroll to make the user experience more pleasant. The displayed data will start with 8 and for each scroll, it will add 8 more to see. 

This then improves loading speed as we don't load a 1000 users at once, but only 8 at a time, as the user requests information.


### Your Profile

This is where a user can make themselves stand out. As information is added, it displayed dynamically. A registered user with no information will have a more or less blank profile, but a user with more information will then stand out!


### Fake Github Pages

When a real user adds their Github Handle we search the Github API for the user's repo with the provided their handle and display their last 5 repos, with their stars, watch and followers. If they have added a live URL site we also will link to that.

BUT we have fake users and I didn't want to stop there, so I created a "look-alike" Github repo. Every fake user has 2 different templates they use, with all fake data. But it was more the aesthetics of getting things to look better.


### Page Not Found

I always love good 404 pages; they are supposed to be fun but still have a meaning for the user. 
This will ruin the surprise with a screenshot so please do visit the live demo <a href="https://www.devhangout.co/not-found" target="_blank">here</a>

## Features

### Your skills

-   Adding skills should be easy. So we are using DevIcons and with a click of a button you can show off your skills!

### Your Profile

-  Make yourself stand out, your own avatar, all your skills and GitHub repo!

### The Fake data

Creating fake data was not easy, with the help of faker.js and json-serve I created a custom skills.js file You can use this and just change the number of users you would like to generate. The file is located in the root under skills.js

Simply said, it will run the other functions, an X number of times and populate the same data as a user would have. 

They will have a fake username, email GitHub, social media so on and so on. Even though the fake avatar is made with
 [RoboHash](https://robohash.org/)  I pass it the email address that we generated and some random numbers, to generate random icons for that user.


## Features Left to Implement

-   Auto sign in: 
    Currently a user will need to register then gets taken to the login screen, this should be a better flow where we post the same data to the login once we get a response.


-   Portfolio
   A user will have the ability to add a personal portfolio. This will be the same as adding an education or experience.  The exception is that it should be shown on their public profile as their gallery.


-   Contact User
    Implementing a way to have an internal message system is in the works. This should make it easier to connect with other members!

-   Filters & Search
    For now, a user can only pick a user from the list or by knowing their ID and username. I have been working on adding a search filter and the ability to filter down by skills etc.
    
- Edit / Delete skill on mobile
    As this has been moved to its own component I have not implemented so a user can edit or delete their skills on mobile.

## Technologies Used

These are the technologies and third-party packages that have been used throughout the project

### Front End

-   [Angular](https://angular.io)
    I'm using this to build all the front end logic and components for my app. As Typescript makes it easy to compile and also easy to scaffold code.

    > Angular (commonly referred to as "Angular 2+") is a TypeScript-based open-source front-end web application platform led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.
    
-   [Bootswatch - United](https://bootswatch.com/)
    Bootswatch is a collection of bootstrap themes. We are using the Cosmo theme modified with some material colours.

-   [NG-Bootstrap](https://ng-bootstrap.github.io)
    NG Bootstrap was created to give components and directives to Angular without the use of jQuery.
    I'm using the modal, and tooltip directives to display information for the user in a simple but good way.

    > The goal of ng-bootstrap is to completely replace JavaScript implementation for components.

-   [Angular CLI](https://cli.angular.io/)
    The Angular CLI is part of the Angular platform and is a great command-line interface to scaffold, generate, test and lint your code.
    This makes it easy to scaffold out components that we use in the project, saving time and give more time to focus on developing the application rather than create all the files, import them etc.

-   [Lodash](https://lodash.com/)
    Lodash is a modern JavaScript utility library making complex code with arrays and objects a simple task.
    > A modern JavaScript utility library delivering modularity, performance & extras.
-   [NgxSpinner](https://napster2210.github.io/ngx-spinner/)
    Animated loading spinner service, this is the small clock you will see when making API calls and waiting for data. This then gives a simple service which you can call with `.show()` or `.hide()`

    > An animated loading spinner for Angular 4/5 that is intended to inform the user that an operation is in progress.

-   [GitHub pages for angular-cli users](https://github.com/angular-schule/angular-cli-ghpages)
    This is a small dev dependency to make it easier to deploy our project to Github Pages.

    > Publish to any gh-pages branch on GitHub (or any other branch on any other remote). Made for angular-cli users.

-   [ng5-validation](https://github.com/yuyang041060120/ng2-validation)
    Angular5 custom validation, inspired by jQuery validation, this is the modified version of the ng2-validation from yuyang, it is compiled for angular5.

-   [@auth0/angular-jwt](https://github.com/auth0/angular2-jwt)
    This library provides an HttpInterceptor which automatically attaches a JSON Web Token to HttpClient requests.

-   [@nicky-lenaers/ngx-scroll-to](https://github.com/nicky-lenaers/ngx-scroll-to)
    A simple Angular 4+ plugin enabling you to smooth scroll to any element on your page and enhance scroll-based features in your app.

-   [@yellowspot/ng-truncate](https://github.com/yellowspot/ng2-truncate)
    A small angular pipe to truncate text as you want.

-   [ngx-stripe](https://github.com/richnologies/ngx-stripe)
    Angular 2+ wrapper for StripeJS.

### Back end

-   [Python](https://www.python.org/)
    The whole backend code is written in [Python](https://www.python.org/) because [Django](https://www.djangoproject.com/) is written in Python.
    > Python is a programming language that lets you work quickly and integrate systems more effectively.

-   [Django](https://www.djangoproject.com/)
    The whole backend is built with Django and added DRT(Django Rest Framework) on top of it.
    > Django is a high-level Python Web framework that encourages rapid development and clean, pragmatic design. Built by experienced developers, it takes care of much of the hassle of Web development so you can focus on writing your app without needing to reinvent the wheel. It’s free and open source.

-   [Django Rest Framework](http://www.django-rest-framework.org/)
    I am using DRF to add an out of the box API for our project

    > Django REST framework is a powerful and flexible toolkit for building Web APIs.

-   [Django Rest Framework](https://github.com/davesque/django-rest-framework-simplejwt)
    A JSON Web Token authentication plugin for the Django REST Framework.
    > Simple JWT provides a JSON Web Token authentication backend for the Django REST Framework. It aims to provide an out-of-the-box solution for JWT authentication which avoids some of the common pitfalls of the JWT specification. Assuming users of the library don't extensively and invasively subclass everything, Simple JWT's behaviour shouldn't be surprising. Settings variable defaults should be safe.

-   [Heroku](https://www.heroku.com/)
    When hosting different applications that are not static [Heroku](https://www.heroku.com/) is a great choice at least I think.
    If the backend is Django, Flask, Node, Ruby On Rails or any other this is a great hosting environment which simplifies a lot of work, it's also FREE.
    We can simply push our app to Heroku using their [CLI](https://devcenter.heroku.com/articles/heroku-cli) and from there it does everything for you, you can also setup pipelines and pull from a GitHub repo.
    > Heroku is a cloud platform as a service supporting several programming languages.

### Development (Frontend)

-   [faker.js](https://github.com/Marak/faker.js)
    Used to generate our fake users

    > Generate massive amounts of fake data in Node.js and the browser

-   [json-server](https://github.com/typicode/json-server)
    This is the web server that makes us able to convert our fake data from faker.js into a JSON object we can use.
    Please do read their GitHub project on how to use it.
    > Get a full fake REST API with zero coding in less than 30 seconds (seriously)

## Testing
At the Code Insititute, we are encouraged to code using TDD methods.  
Automatic testing has never been a strong point for me, but testing itself is important. I do prefer to have human testers, report bugs etc and then fix it. Bug hunting is awesome! For a proper business page/app etc unit testing and e2e testing is essential.


#### Responsive Testing

##### Browsers

```
Microsoft Explorer 11
Microsoft Edge (v18)
Chrome (v70)
Firefox Developer Edition (v62)
```

##### Frontend

**400 Bad Requests on adding experience or education without an end date.**

*UserStory:*
The user would log in to their profile to proceed to add their education or experience. 
This would then give a 400 error as the field would not be correct when posted. The "End date" would be blank. As this was not treated as null it would throw an exception and error.

This was fixed shortly after as we added a check for this, and also we added a date to it. So if the user would not fill it in we would pass null. If they toggled the currently working here we would grab today's date. We also changed the backend to by default make it required.

 
 **Skills looked weird**
 
 *UserStory:*
The skills would be on top and the user's skills itself would be at the bottom. Clicking a skill would remove the skills from the top but also the next one in the array. This would make it hard for the user to do this.
  
After this, I redesigned it in the way that if you click on a skill we first check if the user has the skill.  If they don't we make a post request with that skill and add it to the user skills. 
If they already have it we will just `return` and give the user a notification.
 
 **Mobile not looking too good for the profile and front page.**
 
 *UserStory:*
 There were some issues with smaller devices where things did not look good. Users reported to me that there were things that could be done. 
 I redesigned it with smaller icons better breakpoints.

 
 **Tables to cards**
 
 *UserStory:*
 Looking at the table on mobile was hard,  so I used bootstrap to hide the tables on mobile and show cards instead.
 
 
### Known Bugs

Since the project is built with Bootstrap 4 (Bootswatch) I'm fairly certain things are responsive, though there will always be widths and heights that are uncommon and will "glitch".

There is a known glitch with the FAB button regarding the Name property been undefined. I tried multiple fixes, but as this has been intermitted bug I decided late on that I would remove the name to give the user a better experience until I could hunt down the proper cause.

This has been proven to be if a user is logged in and come back the token will have expired. This will then cause it to throw an error. Normally, for now, a workaround has been a force refresh and then click the button again.

**Possible fix**
Changed the ID from the icon to the button, as it seems it would pick up clicking on the button instead of the icon

There is also a known bug in Firefox (63.0b7) Developer Edition where the button won't work at all. It seems to be an issue with ng-bootstrap and the way the modal is opened. Regardless of how its opened, it will throw an error that the component it's trying to open is undefined. Currently, I'm waiting on a fix.  [More Info](https://github.com/ng-bootstrap/ng-bootstrap/issues/2509)

## Installing and building

### Requirements

```console
Python 3+ (Built with 3.6.6)
Django 2+ (Built with 2.0.5)
Django Rest framework 3+  (Built with 3.8.2)
NPM 5+ (Built with 6.2.0)
NodeJS 8+ (Built with 10.9.0)
Angular 5+ (Built with 6.1.7)
Angular CLI (Built with 6.2.1)
MySQL 5.6+
json-server (Only yo create your own fake users)
faker.js (Only yo create your own fake users)
```

##### Database Outline
<img src="https://raw.githubusercontent.com/Eventyret/DevHangout/master/DBDiagram.svg?sanitize=true">


##### Installing

1. Clone the project (The documentation consider the `DevHangout` the root folder)

```console
git clone https://github.com/Eventyret/DevHangout.git
```

2. Change Directory into the root folder

```console
cd DevHangout
```

3. Create a Virtual Environment (This creates a folder named `.venv` to hold python environment files)

```console
virtualenv .venv
```

4. Install Python dependencies (This installs all our project dependencies)

```console
pip install -r BackendApi\requirements.txt
```

5. Install Angular dependencies by running (This installs all the angular dependencies)

```console
npm install
```

#### Running project locally.

As a developer, I feel its important to give you different ways to run your backend in a simple and clean way, so I have made two ways to run your backend project.
Regardless of the project, you **WILL** need a Mysql database. and create an `env.py` file to hold the information.

-   Create a new file in the folder `BackendApi` root folder (where you have manage.py) name it `env.py`
-   Paste the content below and switch use your own information.
-   Generate a Secret Key (A tip you can use [PasswordGenerator.net](https://passwordsgenerator.net/) Select 64 and generate it)

```python
import os
envset = os.environ.setdefault
# DEVELOPMENT TYPE
envset("ENV", 'development')

# DJANGO SECRET KEY
envset("SECRET_KEY", "YOUR SECRET GENERATED KEY")

# Database
envset("DBNAME", "YOUR DATABASE NAME")
envset("DBUSER", "YOUR DATABASE USER")
envset("DBPASS", "YOUR DATABASE PASSWORD")
envset("DBHOST", "YOUR DATABASE HOSTNAME")
envset("DBPORT", "3306")

DEBUG = True
```

Angular has 2 `environment.ts` files. one is for development other one is for  production please create 2 files named `environment.ts` and `environment.prod.ts` and use the following content

You can get the following API keys from these places:
- [Github Secret & Client ID](https://developer.github.com/apps/building-oauth-apps/creating-an-oauth-app/)
- [Stripe API Key](https://stripe.com/docs/keys)

```typescript
// For local development
export const environment = {
  production: false,
  publish_api_key: "YOUR STRIPE API KEY",
  github_client_id: "YOUR GITHUB CLIENT ID",
  github_client_secret: "YOUR GITHUB SECRET KEY",
  api_url: "http://localhost:8000",
  fake_users: "fakeusers-dev.json",
  skills: "skills.json",
  githubapi_url: "https://api.github.com/"
};

```

```typescript
// For production servers - Do not include ending / in api_url
export const environment = {
  production: true,
  publish_api_key: "YOUR STRIPE API KEY",
  github_client_id: "YOUR GITHUB CLIENT ID",
  github_client_secret: "YOUR GITHUB SECRET KEY",
  api_url: "INSERT YOUR URL HERE", 
  fake_users: "fakeusers-prod.json",
  skills: "skills.json",
  githubapi_url: "https://api.github.com/"
};

```

**Once done you're ready to continue**

#### Backend

1. Docker (Recommended)
   If you have [Docker](https://www.docker.com/) installed you can simply run the command below (This will start the server on port `8000`)

***With Docker, you still need to migrate and make migrations and create a superuser, so before running the command below please see the manual step on how makemigrations and migrate and create a superuser. Once done you can use the below command to start the server.***

```console
docker-compose up
```

2. Manual

-   Activate the Virtual Environment:

Windows:

```console
.venv\Scripts\Active
```

Unix:

```console
source .venv/bin/activate
```

-   Make migrations & Migrate

```console
python BackendApi\manage.py makemigrations
python BackendApi\manage.py migrate
```

-   Create Superuser

```console
python BackendApi\manage.py createsuperuser
```

Follow the onscreen instructions to create your user.

-   Start the Server

```console
python BackendApi\manage.py runserver
```

#### Frontend

Since I are using angular for our build it's as simple as running: `ng serve` in the root folder of the project.
This will start our development server on port `4200`

#### Building the application

Since Angular is built with a mix of HTML, SCSS and Typescript the browser has no clue on how to interpret the languages, so we need to compile this into a web application.

To build your app and make it ready for deployment Angular again gives you a simple command to build and make this ready

```console
ng build --prod --base-href "https://yourdomain.com/
```

If you are building this to be uploaded directly to the root folder of a domain you can also shorten this by doing

```console
ng build --prod
```

##### Fake Data
Below is the functions written for the fake data. 
I have removed the dummy data so please see `skills.js` file in root of the project to use it with json-server to generate your own
```javascript
module.exports = () => {
	let faker = require("faker");
	let _ = require("lodash");
	return {
		users: _.times(1001, function(n) {
			let skillsData = [];
			let titlesData = [];
			let githubUrl = "https://YOURDOMAIN/github/"
			let username = faker.internet.userName();
			let randomSet = _.sample([1, 2, 3, 4]);
			let diplomaData = _.sample(diploma);
			let studyData = _.sample(study);
			let location = faker.address.country();
			let email = faker.internet.email();
			titlesData.push(titles);

			_.times(
				faker.random.number({
					min: 1,
					max: 5
				}),
				function(n) {
					let newSkills = _.sampleSize(skills, 5);
					skillsData = _.uniqBy(newSkills, "name");
				}
			);
			function randomEdu(id) {
				let eduData = [];
				_.times(
					faker.random.number({
						min: 1,
						max: 5
					}),
					function() {
						let education = {
							user: id,
							school: faker.company.companyName(),
							qualification: diplomaData,
							fieldOfStudy: studyData,
							dateFrom: faker.date.between(1980, 2012),
							dateTo: faker.date.between(2012, 2018),
							description: faker.lorem.sentence()
						};
						eduData.push(education);
					}
				);
				return eduData;
			}
			function randomExp(id) {
				let expData = [];
				_.times(
					faker.random.number({
						min: 1,
						max: 5
					}),
					function() {
						experience = {
							user: 9000 + n,
							jobTitle: _.sample(titles),
							company: faker.company.companyName(),
							dateFrom: faker.date.between(1980, 2012),
							dateTo: faker.date.between(2012, 2018),
							current: faker.random.boolean(),
							description: faker.lorem.sentence(),
							location: location
						};
						expData.push(experience);
					}
				);
				return expData;
			}
			function githubRepo() {
				let githubData = [];
				_.times(
					faker.random.number({
						min: 1,
						max: 5
					}),
					function() {
						const reponame = faker.lorem.word();
						const randomNumberLow =  faker.random.number({
							min: 1,
							max: 100
						});
						const randomNumberHigh =  faker.random.number({
							min: 1,
							max: 900
						});
						gitData  =  {
							name: reponame,
							html_url: githubUrl + username + "/" + reponame,
							description: faker.hacker.phrase(),
							stargazers_count: randomNumberHigh,
							watchers_count: randomNumberLow,
							forks_count: randomNumberLow,
							open_issues_count: randomNumberLow,
							updated_at: faker.date.recent(),
							project: _.sample(project),
							tabs: tabs
							}
							githubData.push(gitData);
					}
				);
				return githubData;
			}



			return {
				id: 9000 + n,
				username: username,
				email: email,
				profile: {
					user: 9000 + n,
					firstName: faker.name.firstName(),
					lastName: faker.name.lastName(),
					avatar: "https://robohash.org/" + email + "?gravatar=yes&set=set" + randomSet + "&size=300x300&bgset=bg" + randomSet,
					location: location,
					website: faker.internet.url(),
					company: faker.company.companyName(),
					title: _.sample(titles),
					backgroundImage: "https://picsum.photos/1920/1080?random",
					bio: faker.lorem.paragraphs(1),
					twitter: username,
					facebook: username,
					linkedin: username,
					instagram: username,
					youtube: username,
					github: username,
					donator: faker.random.boolean(),
					testimonal: faker.lorem.paragraphs(1),
				},
				education: randomEdu(9000 + n),
				experience: randomExp(9000 + n),
				skills: skillsData,
				repo: githubRepo()
			};
		})
	};
};
```


##### Backend

There is no compiling / building for the backend, so you can just continue to read about deploying the backend.

## Deployment

### Backend

#### The API

There is a simple but great git command we can use to upload JUST the backend instead of the whole project folder.
We can use the power of git and use `git subtree` to upload and deploy ONLY the API to Heroku you can use the following command.

```console
git subtree push --prefix BackendApi heroku master
```

_Note: The BackendApi here is the folder name we want to push_

**Heroku Environment variables**
We need to set a secret variable so Heroku knows what database to use.

```console
heroku config:set Development=False
heroku config:set DBHOST=YOU DB HOST
heroku config:set DBNAME=YOUR DB NAME
heroku config:set DBPASS=YOUR DB PASSWORD
heroku config:set DBPORT=3306
heroku config:set DBUSER=YOUR DB USER
heroku config:set DISABLE_COLLECTSTATIC=1
heroku config:set SECRET_KEY=YOUR SECRET KEY
```

_Note: You might have to go into Heroku after creating the app and make sure it has not added a PostgreSQL url if this is the case remove it as it will use that as a priority_

**NOTE: Make sure you set the configurations before you push to Heroku, else you won't get any data back.**

### Frontend

After you have **built** your application you got a few options.

1. If you are uploading to your own domain, just upload the content of the `dist` folder and you're ready to go.
2. If you want to deploy to GitHub Pages there is an amazing dev dependency installed in the project for you named [GitHub pages for angular-cli users](https://github.com/angular-schule/angular-cli-ghpages). So all you need to do is issue the command `npx ngh` and the npm package will automatically publish this to your GitHub pages.

```console
ng build --prod && npx ngh
```

## Credits

-   [Devicon](http://konpa.github.io/devicon/) - For the Awesome skill icons we are using just like font awesome just developer skills icons instead of generic icons.
-   [Font Awesome](https://fontawesome.com) - Generic Web Icons used
-   [CSS + SVG Loading Spinner](https://codepen.io/JavaScriptErika/pen/GvPyMG) - Our Awesome SVG Loading animation
-   [RoboHash](https://robohash.org/) - For the awesome generated avatars for our fake users.

## Disclaimer

This is for educational purposes only.

