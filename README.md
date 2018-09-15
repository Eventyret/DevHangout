# Development Hangout

## What is it ?
A Simple place to hangout with other developers, its ment to serve as a social place where you can show off your skills and your github repo.
The idea came from Code Insitiute and have a location for students to show off and just have a simple registration.

Students can share their 5 latest Github repo and make post and comments for others.
If they also felt that could help others they could put up skills they had for others to view.

## Requirements
* Python
* Django
* Django Restframework
* NPM
* Angular


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

### Back end
- [Python](https://www.python.org/)
    The whole backend is written in [Python](https://www.python.org/) as [Flask](http://flask.pocoo.org/) is written in Python.
    >Python is a programming language that lets you work quickly and integrate systems more effectively.
    
- [Django](https://www.djangoproject.com/)
     >Django is a high-level Python Web framework that encourages rapid development and clean, pragmatic design. Built by experienced developers, it takes care of much of the hassle of Web development, so you can focus on writing your app without needing to reinvent the wheel. It’s free and open source.

- [Django Rest Framework](http://www.django-rest-framework.org/)
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
There is a bug where the field if your currently working or if you currently styding that does not update on load. This is due that the form loads before the API is done and it doesn't update the value correctly before render. Currently investigation and trying to ammend this.
There is also a bit wierd of how the classes show as its blue and changes text, though red and green depending on change does not really fit in either. *This is not a bug but more of a UI / UX Issue i noticed*
*This is now fixed*

If the a user profile is empty (brand new) the footer will have some whitespace, have been unable so far to fix this due the time it has taken to build this project.
## Credits
