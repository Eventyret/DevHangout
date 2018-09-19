![Developers Hangout](https://raw.githubusercontent.com/Eventyret/DevHangout/develop/src/assets/logo-share.png)

Are you a lonesome developer? Sitting at work or maybe in your own room typing away the code?
Do you wish that you could meet fellow developers instead of hundreds of Facebook groups and LinkedIn Groups?
Well Developers Hangout have ya covered, its a community made by a developer for other developers!

# [Developers Hangout Website](https://www.devhangout.co)

## UX

The UX is made with simplicity in mind, it's ment to be easy to navigate and simple information with icons to process.

### The Dashboard

### Developers List
	
### Your Profile

### Fake Github Pages

### Page Not Found

I always love good 404 pages, they are supposed to be fun but still have a meaning for the user.
This will ruin the surprise with a screenshot so please do visit our the live demo [here](https://www.devhangout.co/not-found)


## Features

### Your skills

-   You can visualise the data and clearly see the amount of Pokémon's by their type.
    This means its easy to see how many "Steel", "Electric", "Fairy" types of pokemon there is.

### Your Profile

-   This is will display the average stats for the all Pokémon's combined.

## Features Left to Implement


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
    The whole backend is written in [Python](https://www.python.org/) as [Flask](http://flask.pocoo.org/) is written in Python.
    > Python is a programming language that lets you work quickly and integrate systems more effectively.

-   [Django](https://www.djangoproject.com/)
    The whole backend is built with Django and added DRT(Django Rest Framework) on top of it.
    > Django is a high-level Python Web framework that encourages rapid development and clean, pragmatic design. Built by experienced developers, it takes care of much of the hassle of Web development, so you can focus on writing your app without needing to reinvent the wheel. It’s free and open source.

-   [Django Rest Framework](http://www.django-rest-framework.org/)
    Our choice of Django API
    > Django REST framework is a powerful and flexible toolkit for building Web APIs.

-   [Heroku](https://www.heroku.com/)
    When hosting different applications that are not static [Heroku](https://www.heroku.com/) is a great choice at least I think.
    If the backend is Django, Flask, Node, Ruby On Rails or any other this is a great hosting environment which simplifies a lot of work, it's also FREE.
    We can simply push our app to Heroku using their [CLI](https://devcenter.heroku.com/articles/heroku-cli) and from there it does everything for you, you can also setup pipelines and pull from a GitHub repo.
    > Heroku is a cloud platform as a service supporting several programming languages.

## Testing

#### Responsive Testing

##### Browsers

```
Microsoft Explorer 11
Microsoft Edge (v18)
Chrome (v70)
Firefox Developer Edition (v62)
```

##### Frontend

I had some issues regarding the battle, where the help text would not update. This was simply because I forgot to rename the help text in `battles.component.ts` this was fixed at a later date but now updates correctly.

**User Story:**
The user would start a battle and the help text would be `Get Ready to fight`. The user then would start the fight and the text would change to `Fight in progress`, once the fight was completed it would say `Please stop the Fight to continue`.
Now the bug would the be that if a user clicked stop it would still display this message. This was fixed in the following commit [#d922680](https://github.com/Eventyret/PokeDash/commit/d92268082b31c66d9670458f1e038ea157174f3b)

### Known Bugs

Since the project is built with Bootstrap 4 (Bootswatch) I'm fairly certain things are responsive, though there will always be widths and heights that are uncommon and will "glitch".


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
```

##### Installing

1. Clone the project (The documentation consider the `PokeDash` the root folder)

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

4. Install Python dependencies (This installs all flask dependencies)

```console
pip install -r BackendApi\requirements.txt
```

5. Install Angular dependencies by running (This installs all the angular dependencies)

```console
npm install
```

#### Running project locally.

As a developer, I feel its important to give you different ways to run your backend in a simple and clean way, so I have made two ways to run your backend project.

#### Backend

**_Sidenote_**: The project has set up a default database to connect to on developer mode, check [Deployment](#Deployment) for info on how to create a database etc to connect to.

1. Docker (Recommended)
   If you have [Docker](https://www.docker.com/) installed you can simply run the command below (This will start the server on port `5000`)

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

-   Start the server

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

_note the BackendApi here which is the folder name we want to push_

#### The Database

You will need a MySQL database and provide the data

**Heroku Environment variables**
We need to set a secret variable so Heroku knows what database to use.

```console
heroku config:set Development=False
```

This tells the server that we are in a production environment and chooses the correct database accordingly.

```console
heroku config: set SECRET_URI="mongodb://dbuser:dbpassword@hostname:port/databasename"
```

All this information you can find on [mlab Dashboard](https://www.mlab.com/databases/) once you are logged in. You are looking for an URL like the one in this picture.
![0r2UfHC.png](https://i.imgur.com/0r2UfHC.png)
Make sure you change the following in that string: - `dbuser` your mlab username for the database - `dbpassword` your mlab password for the database

**NOTE: Make sure you set the configurations before you push to Heroku, else you won't get any data back.**

### Frontend

After you have **built** your application you got a few options.

1. If you are uploading to your own domain, just upload the content of the `dist` folder and you're ready to go.
2. If you want to deploy to GitHub Pages there is an amazing dev dependency installed in the project for you named [GitHub pages for angular-cli users](https://github.com/angular-schule/angular-cli-ghpages). So all you need to do is issue the command `npx ngh` and the npm package will automatically publish this to your GitHub pages.

**_Sidenote:_** If your using this method make sure you do the following command. This is to make it compatible with GitHub pages.

```console
ng build --prod --base-href="https://USERNAME.github.io/REPOSITORY_NAME/"
```

## Credits

### Content

-   [Pikachu - SVG Animation](https://codepen.io/royutoan/pen/JXOwwL) - Loading Animation Pikachu

### Media

-   [PokéAPI · GitHub](https://github.com/PokeAPI) - For all Pokémon Sprites
-   [I Like Sticker](https://www.ilikesticker.com/LineStickerAnimation/S002997-Pok%C3%A9mon-The-Oaks/en) - Professor Oak image
-   [Pokemon Gold Desktop Background Animation - Album on Imgur](https://imgur.com/gallery/0Gi6O) - Start Screen
