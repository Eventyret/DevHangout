# Development Hangout

## What is it ?
A Simple place for developers to connect. Share their work and see what other skills developers around the world have.
There are some things that will be implemented at a later stage like portfolio etc.
But for now its more ment to browse the skills and who another developer is. 

## Requirements
* Python 3+ (Built with 3.6.6)
* Django 2+ (Built with 2.0.5)
* Django Restframework 3+  (Built with 3.8.2)
* NPM 5+ (Built with 6.2.0)
* NodeJS 8+ (Built with 10.9.0)
* Angular 5+ (Built with 6.1.7)
* Angular CLI (Built with 6.2.1)


## Get Started

## Tech Used

### Front End
- [Angular](https://angular.io)
    I'm using this to build all the front end logic and components for my app. As Typescript makes it easy to compile and also easy to scaffold code.
    > Angular (commonly referred to as "Angular 2+") is a TypeScript-based open-source front-end web application platform led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.
	
- [Bootswatch - United](https://bootswatch.com/)
    Bootswatch is a collection of bootstrap themes. We are using the Cosmo theme modified with some material colours.

- [NG-Bootstrap](https://ng-bootstrap.github.io)
    NG Bootstrap was created to give components and directives to Angular without the use of jQuery.
    I'm using the modal, and tooltip directives to display information for the user in a simple but good way.
    >The goal of ng-bootstrap is to completely replace JavaScript implementation for components.

- [Angular CLI](https://cli.angular.io/)
    The Angular CLI is part of the Angular platform and is a great command-line interface to scaffold, generate, test and lint your code.
    This makes it easy to scaffold out components that we use in the project, saving time and give more time to focus on developing the application rather than create all the files, import them etc.
  
- [Lodash](https://lodash.com/)
    Lodash is a modern JavaScript utility library making complex code with arrays and objects a simple task.
    >A modern JavaScript utility library delivering modularity, performance & extras.

    
- [NgxSpinner](https://napster2210.github.io/ngx-spinner/)
    Animated loading spinner service, this is the small clock you will see when making API calls and waiting for data. This then gives a simple service which you can call with `.show()` or `.hide()`
    >An animated loading spinner for Angular 4/5 that is intended to inform the user that an operation is in progress.

- [GitHub pages for angular-cli users](https://github.com/angular-schule/angular-cli-ghpages)
    This is a small dev dependency to make it easier to deploy our project to Github Pages.
    >Publish to any gh-pages branch on GitHub (or any other branch on any other remote). Made for angular-cli users.
	
- [ng5-validation](https://github.com/yuyang041060120/ng2-validation)
    Angular5 custom validation, inspired by jQuery validation, this is the modified version of the ng2-validation from yuyang, it is compiled for angular5.
	
- [@auth0/angular-jwt](https://github.com/auth0/angular2-jwt)
    This library provides an HttpInterceptor which automatically attaches a JSON Web Token to HttpClient requests.
	
- [@nicky-lenaers/ngx-scroll-to](https://github.com/nicky-lenaers/ngx-scroll-to)
	A simple Angular 4+ plugin enabling you to smooth scroll to any element on your page and enhance scroll-based features in your app.
	
- [@yellowspot/ng-truncate](https://github.com/yellowspot/ng2-truncate)
   A small angular pipe to truncate text as you want.

- [ngx-stripe](https://github.com/richnologies/ngx-stripe)
    Angular 2+ wrapper for StripeJS.
	

### Back end
- [Python](https://www.python.org/)
    The whole backend is written in [Python](https://www.python.org/) as [Flask](http://flask.pocoo.org/) is written in Python.
    >Python is a programming language that lets you work quickly and integrate systems more effectively.
    
- [Django](https://www.djangoproject.com/)
	The whole backend is built with Django and added DRT(Django Rest Framework) on top of it.
     >Django is a high-level Python Web framework that encourages rapid development and clean, pragmatic design. Built by experienced developers, it takes care of much of the hassle of Web development, so you can focus on writing your app without needing to reinvent the wheel. It’s free and open source.

- [Django Rest Framework](http://www.django-rest-framework.org/)
	Our choice of Django API
    >Django REST framework is a powerful and flexible toolkit for building Web APIs.
    
- [Heroku](https://www.heroku.com/)
    When hosting different applications that are not static [Heroku](https://www.heroku.com/) is a great choice at least I think.
    If the backend is Django, Flask, Node, Ruby On Rails or any other this is a great hosting environment which simplifies a lot of work, it's also FREE.
    We can simply push our app to Heroku using their [CLI](https://devcenter.heroku.com/articles/heroku-cli) and from there it does everything for you, you can also setup pipelines and pull from a GitHub repo.
    >Heroku is a cloud platform as a service supporting several programming languages. 
    
    See more about this in [Deployment](##Deployment) below.


## Testing

## Known Bugs

### Front End
There is quite a few of these that i'm aware of and constaly trying to fix.
 - There is a known issue where the FAB button you will click and it will say that name is undefined.
 	This is a intermitted bug but still it should be sorted, but as its intermitted its hard to track down as it happends from time to time.
 	The reason seems to be that when you click on the FAB button we pass on the username or Anonymous but this is not instantiated and given a value yet.
 
 - The navbar switches image to not logged in. This does not seem to be a bug but will rather write it down as its not how it 100% should be.
	Simply put when a user is logged in we will pull in their photo, if a user clicks any buttons we will refresh the token for that user and notify the navbar.
	If a user has expired from time to time this image will then revert back to Anonymous to indicate its not logged in, clicking on any link will refresh it again.
	
- Donate does not refresh profile.
	If you edit your profile or anything it will automatically grab the updated data, but because this data is from another component I have not come up with the correct
	idea on how I can notify the dashboard to update the data from the sibling component.
	The workaround is after a person has donated, they can switch to any page other then dashboard (if they are on dashboard) and it will refresh the data.
	If they are on any other page then it doesn't matter as when they visit the dashboard the data will be updated anyways.

- If the a user profile is empty (brand new) the footer will have some whitespace, have been unable so far to fix this due the time it has taken to build this project.

## Credits
