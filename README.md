![Developers Hangout](https://raw.githubusercontent.com/Eventyret/DevHangout/develop/src/assets/logo-share.png)

Are you a lonesome developer? Sitting at work or maybe in your own room typing away the code?
Do you wish that you could meet fellow developers instead of hundreds of Facebook groups and LinkedIn Groups?
Well Developers Hangout have ya covered, its a community made by a developer for other developers!

# [Developers Hangout Website](https://www.devhangout.co)

## UX

The UX is made with simplicity in mind, it's ment to be easy to navigate and simple information with icons to process.

### The Dashboard

The Dashboard is the main area for a user to edit all their profile.
Simple buttons that provide the user with a modal for editing, adding skills, experience, education and their profile details.

It also comes with a simple table in desktop mode to have a overview of all the information.
As tables are not looking good for a user experience on mobile, I chose to switch this to cards as its easier for the user to consume.

### Developers List

The developers list is a simple card list showing all developers registered + 1000 fake users.
We have added infinite scroll to make the user experice more plesant.
The displayed data will start with 8 and for each scroll it will add 8 more to see.
This then improves loading speed as we don't load 1000 users but only 8 when the user requests it.

### Your Profile

This is where a user can make themself stand out, by adding information we are dynamicly displaying this.
A registered user with no information will have a more or less blank profile, but a user with more information
will then stand out!

### Fake Github Pages

When a real user adds their Github Handle we will then search the Github Api for the users provided handle and display
the last 5 repos, with their stars, watch, and followers. If they have added a live url site we also will link to that.

BUT we have fake users, and I didnt want to stop there, so i created a "look a like" Github repo.
Every fake user has 2 different templates they use with all fake data. But it was more the astetic of getting things looking better.

### Page Not Found

I always love good 404 pages, they are supposed to be fun but still have a meaning for the user.
This will ruin the surprise with a screenshot so please do visit our the live demo [here](https://www.devhangout.co/not-found)

## Features

### Your skills

-   Adding skills should be easy. So we are using DevIcons and with a click of a button you can show off your skills!

### Your Profile

-   Make yourself stand out, your own avatar, all your skills and github repo!

### The Fake data

Createing fake data was not easy, with the help of faker.js and json-serve I created a custom skills.js file
You can use this and just change the amount of users you would like to generate.
The file is located in the root under `skills.js`

Simple said, it will run the other functions X amount of times, and populate the same data as a user would have.
They will have a fake username, email github, social media so on and so on.
Thought the fake avatars are used with [RoboHash](https://robohash.org/) we are passing it the email we generated and some random numbers to get totaly random icons for that user.

## Features Left to Implement

-   Auto sign in
    Currently a user will need to register then gets taken to the login screen, this should be a better flow where we post the same data to the login once we get a response.

-   Portfolio
    User will have a the abilities to add portfolio, this will be the same asadding education and experience, except it should be shown on their public profile as a gallery.

-   Contact User
    Implementing a way to have a internal message system is in the works. This should make it easier to connect with other members!

-   Filters & Search
    For now a user can only pick a user from the list or by knowing their ID and username. I been working on adding a search filter and ability to filter down by skills etc.
	
- Edit / Delete skill on mobile
	As this has been moved to it's own component I have not implemented so a user can edit or delete their skills on mobile.

## Technologies Used

These are technologies and third-party packages that are used throughout the project

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
    The whole backend is written in [Python](https://www.python.org/) as [Django](https://www.djangoproject.com/) is written in Python.

    > Python is a programming language that lets you work quickly and integrate systems more effectively.

-   [Django](https://www.djangoproject.com/)
    The whole backend is built with Django and added DRT(Django Rest Framework) on top of it.

    > Django is a high-level Python Web framework that encourages rapid development and clean, pragmatic design. Built by experienced developers, it takes care of much of the hassle of Web development, so you can focus on writing your app without needing to reinvent the wheel. It’s free and open source.

-   [Django Rest Framework](http://www.django-rest-framework.org/)
    We are using DRF to add a out of the box API for our project

    > Django REST framework is a powerful and flexible toolkit for building Web APIs.

-   [Django Rest Framework](https://github.com/davesque/django-rest-framework-simplejwt)
    A JSON Web Token authentication plugin for the Django REST Framework.

    > Simple JWT provides a JSON Web Token authentication backend for the Django REST Framework. It aims to provide an out-of-the-box solution for JWT authentication which avoids some of the common pitfalls of the JWT specification. Assuming users of the library don't extensively and invasively subclass everything, Simple JWT's behavior shouldn't be surprising. Settings variable defaults should be safe.

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
    This is the webserver that makes us able to convert our fake data from faker.js into a JSON object we can use.
	Plaese do read their github project on how to use it.
    > Get a full fake REST API with zero coding in less than 30 seconds (seriously)

## Testing
In Code Insititute we are told to code in TDD and automatic testing has never been a strong side of me, but testing itself is important.
I do prefer to have human testers, report bugs etc and then fix it. Bug hunting is awesome!
Thought for a propper buisness page / app etc unit testing and e2e testing is essential.

#### Responsive Testing

##### Browsers

```
Microsoft Explorer 11
Microsoft Edge (v18)
Chrome (v70)
Firefox Developer Edition (v62)
```

##### Frontend

400 Bad Requests on adding experience or education without an end date.

**User Story:**
The User would login to their profile to proceed to add their education or experience.
 This would then give a 400 error as the field would not be correct when posted. The "End date" would be blank.
 As this was not treated as null it would throw an expection and error.
 
 This was fixed shortly after as we added a check for this, and also we added a date to it.
 So if the user would not fill it in we would pass null. If they toggled the `currently working here` we would grab todays date.
 We also changed the backend to by default make it required.
 
 Skills looked wierd:
  The skills would be on top and the users skills itself would be at the bottom. Clicking a skill would remove the skills from the top but also the next one in the array. This would make it hard for the user to do this.
  
  After this I redesigned it in the way that you if you click a skill we first check if the user has the skill, if they don't we make a post request with that skill and add it to the user skills.
  If they already have it we will just `return` and give the user a notification.
 
 Mobile not looking to good for the profile and front page.
 There where some issues with smaller devices where things did not look good. Users reported to me that there where things that could be done.
 I redesigned it with smaller icons better breakpoints.
 
 Tables to cards
 Looking at the table on mobile was hard,  so I used bootstrap to hide the tables on mobile and show cards instead.
 
 
### Known Bugs

Since the project is built with Bootstrap 4 (Bootswatch) I'm fairly certain things are responsive, though there will always be widths and heights that are uncommon and will "glitch".

There is a known glitch with the FAB button regarding the Name property been undefnied. I tried multiple fixes, but as this has been intermitted bug i decied late on that I would remove the name to give the user a better experience until i could hunt down the propper cause.

## Installing and building

### Requirements

```console
Python 3+ (Built with 3.6.6)
Django 2+ (Built with 2.0.5)
Django Restframework 3+  (Built with 3.8.2)
NPM 5+ (Built with 6.2.0)
NodeJS 8+ (Built with 10.9.0)
Angular 5+ (Built with 6.1.7)
Angular CLI (Built with 6.2.1)
MySQL 5.6+
json-server (Only yo create your own fake users)
faker
```

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
Regardless of project you **WILL** need a Mysql database. and create an `env.py` file to hold the information.

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

**Once done your ready to continue**

#### Backend

1. Docker (Recommended)
   If you have [Docker](https://www.docker.com/) installed you can simply run the command below (This will start the server on port `5000`)

    With docker you still need to migrate and make migrations and create a super user, so before running the command below please see the manual step on how
    makemigrations and migrate and create a super user. Once done you can use the below command to start the server.

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

Since we are using angular for our build it's as simple as running: `ng serve` in the root folder of the project.
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

_Note: You might have to go into heroku after creating the app and make sure it has not added a postgreesql url, if this is the case remove it as it will use that as a priority_

**NOTE: Make sure you set the configurations before you push to Heroku, else you won't get any data back.**

### Frontend

After you have **built** your application you got a few options.

1. If you are uploading to your own domain, just upload the content of the `dist` folder and you're ready to go.
2. If you want to deploy to GitHub Pages there is an amazing dev dependency installed in the project for you named [GitHub pages for angular-cli users](https://github.com/angular-schule/angular-cli-ghpages). So all you need to do is issue the command `npx ngh` and the npm package will automatically publish this to your GitHub pages.

```console
ng build --prod && npx ngh"
```

## Credits

-   [Devicon](http://konpa.github.io/devicon/) - For the Awesome skill icons we are using just like font awesome just developer skills.
-   [Font Awesome](https://fontawesome.com) - Icons
-   [CSS + SVG Loading Spinner](https://codepen.io/JavaScriptErika/pen/GvPyMG) - Our Awesome SVG Loading animation
-   [RoboHash](https://robohash.org/) - For the awesome generated avatars for our fake users.

## Disclamer

This is for educational purposes only.
