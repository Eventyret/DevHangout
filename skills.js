module.exports = () => {
	let faker = require("faker");
	let _ = require("lodash");
	return {
		users: _.times(1001, function(n) {
			let skillsData = [];
			let titlesData = [];
			let githubUrl = "http://localhost:4200/github/"
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
							project: _.sample(project)
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

let skills = {
	android: {
		id: 1,
		name: "Android",
		icon: "devicon-android-plain colored"
	},
	angular: {
		id: 2,
		name: "Angular",
		icon: "devicon-angularjs-plain colored"
	},
	backbonejs: {
		id: 3,
		name: "Backbone JS",
		icon: "devicon-backbonejs-plain colored"
	},
	bootstrap: {
		id: 4,
		name: "Bootstrap",
		icon: "devicon-bootstrap-plain colored"
	},
	c: {
		id: 5,
		name: "C",
		icon: "devicon-c-plain colored"
	},
	codeigniter: {
		id: 6,
		name: "Code Igniter",
		icon: "devicon-codeigniter-plain colored"
	},
	coffeescript: {
		id: 7,
		name: "Coffeescript",
		icon: "devicon-coffeescript-original  colored"
	},
	cplusplus: {
		id: 8,
		name: "C++",
		icon: "devicon-cplusplus-plain colored"
	},
	csharp: {
		id: 9,
		name: "C#",
		icon: "devicon-csharp-plain colored"
	},
	css: {
		id: 10,
		name: "CSS",
		icon: "devicon-css3-plain colored"
	},
	d3js: {
		id: 11,
		name: "D3js",
		icon: "devicon-d3js-plain colored"
	},
	django: {
		id: 12,
		name: "Django",
		icon: "devicon-django-plain colored"
	},
	docker: {
		id: 12,
		name: "Docker",
		icon: "devicon-docker-plain colored"
	},
	"dot-net": {
		id: 13,
		name: ".net",
		icon: "devicon-dot-net-plain colored"
	},
	drupal: {
		id: 14,
		name: "Drupal",
		icon: "devicon-drupal-plain colored"
	},
	foundation: {
		id: 15,
		name: "Foundation",
		icon: "devicon-foundation-plain colored"
	},
	gatling: {
		id: 16,
		name: "Gatling",
		icon: "devicon-gatling-plain colored"
	},
	git: {
		id: 17,
		name: "Git",
		icon: "devicon-github-plain colored"
	},
	grunt: {
		id: 18,
		name: "Grunt",
		icon: "devicon-grunt-plain colored"
	},
	gulp: {
		id: 19,
		name: "CSS",
		icon: "devicon-gulp-plain colored"
	},
	heroku: {
		id: 20,
		name: "Heroku",
		icon: "devicon-heroku-plain colored"
	},
	html: {
		id: 21,
		name: "HTML",
		icon: "devicon-html5-plain colored"
	},
	java: {
		id: 22,
		name: "Java",
		icon: "devicon-java-plain colored"
	},
	javascript: {
		id: 23,
		name: "JavaScript",
		icon: "devicon-javascript-plain colored"
	},
	jquery: {
		id: 24,
		name: "jQuery",
		icon: "devicon-jquery-plain colored"
	},
	laravel: {
		id: 25,
		name: "Laravel",
		icon: "devicon-laravel-plain colored"
	},
	mongodb: {
		id: 26,
		name: "noSQL",
		icon: "devicon-mongodb-plain colored"
	},
	mysql: {
		id: 27,
		name: "MySQL",
		icon: "devicon-mysql-plain colored"
	},
	nodejs: {
		id: 28,
		name: "NodeJS",
		icon: "devicon-nodejs-plain colored"
	},
	php: {
		id: 29,
		name: "PHP",
		icon: "devicon-php-plain colored"
	},
	postgresql: {
		id: 30,
		name: "PostgreSQL",
		icon: "devicon-postgresql-plain colored"
	},
	python: {
		id: 31,
		name: "Python",
		icon: "devicon-python-plain colored"
	},
	rails: {
		id: 32,
		name: "Ruby on Rails",
		icon: "devicon-rails-plain colored"
	},
	sass: {
		id: 33,
		name: "SASS",
		icon: "devicon-sass-original  colored"
	},
	swift: {
		id: 34,
		name: "Swift",
		icon: "devicon-swift-plain colored"
	},
	symfony: {
		id: 35,
		name: "Symfony",
		icon: "devicon-symfony-original colored"
	},
	typescript: {
		id: 36,
		name: "TypeScript",
		icon: "devicon-typescript-plain colored"
	},
	vscode: {
		id: 37,
		name: "VSCode",
		icon: "devicon-visualstudio-plain colored"
	},
	vuejs: {
		id: 38,
		name: "VueJS",
		icon: "devicon-vuejs-plain colored"
	},
	wordpress: {
		id: 39,
		name: "Wordpress",
		icon: "devicon-wordpress-plain colored"
	}
};
let titles = ["Developer", "Junior Developer", "Mid Developer", "Senior Developer", "Full Stack Developer", "Student", "Instructor", "Intern", "Web Designer", "Front End Developer", "UI Designer", "UX Designer", "Web Developer", "Dev Ops"];
let diploma = ["A-level", "Higher National Diploma", "Bachelor Degree", "Master Degree", "Doctoral Degree"];
let study = [
	"Computer Science",
	"Information Technology",
	"Software Development",
	"Software Engineering",
	"Mathematics",
	"Business Information Systems",
	"Other"
];
let project = [
	{
		"name": "angular",
		"folders": [
			{
				"name": "e2e",
				"icon": "fas fa-folder",
				"comment": "Init commit",
				"date": "6 months ago"
			},
			{
				"name": "src",
				"icon": "fas fa-folder",
				"comment": "Init commit",
				"date": "6 months ago"
			}
		],
		"files": [
			{
				"name": ".editorconfig",
				"icon": "far fa-file-alt",
				"comment": "Init commit",
				"date": "6 months ago"
			},
			{
				"name": ".gitignore",
				"icon": "far fa-file-alt",
				"comment": "Init commit",
				"date": "6 months ago"
			},
			{
				"name": "README.MD",
				"icon": "far fa-file-alt",
				"comment": "Init commit",
				"date": "6 months ago"
			},
			{
				"name": "angular.json",
				"icon": "far fa-file-alt",
				"comment": "Init commit",
				"date": "6 months ago"
			},
			{
				"name": "package.json",
				"icon": "far fa-file-alt",
				"comment": "Init commit",
				"date": "6 months ago"
			},
			{
				"name": "package-lock.json",
				"icon": "far fa-file-alt",
				"comment": "Init commit",
				"date": "6 months ago"
			},
			{
				"name": "tsconfig.json",
				"icon": "far fa-file-alt",
				"comment": "Init commit",
				"date": "6 months ago"
			},
			{
				"name": "tslint.json",
				"icon": "far fa-file-alt",
				"comment": "Init commit",
				"date": "6 months ago"
			}
		],
		"readmeContent":
		"<h1><a id=\"Project_Title_0\"><\/a>Project Title<\/h1>\r\n<p>One Paragraph of project description goes here<\/p>\r\n<h2><a id=\"Getting_Started_4\"><\/a>Getting Started<\/h2>\r\n<p>These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.<\/p>\r\n<h3><a id=\"Prerequisites_8\"><\/a>Prerequisites<\/h3>\r\n<p>What things you need to install the software and how to install them<\/p>\r\n<pre><code>Give examples\r\n<\/code><\/pre>\r\n<h3><a id=\"Installing_16\"><\/a>Installing<\/h3>\r\n<p>A step by step series of examples that tell you how to get a development env running<\/p>\r\n<p>Say what the step will be<\/p>\r\n<pre><code>Give the example\r\n<\/code><\/pre>\r\n<p>And repeat<\/p>\r\n<pre><code>until finished\r\n<\/code><\/pre>\r\n<p>End with an example of getting some data out of the system or using it for a little demo<\/p>\r\n<h2><a id=\"Running_the_tests_34\"><\/a>Running the tests<\/h2>\r\n<p>Explain how to run the automated tests for this system<\/p>\r\n<h3><a id=\"Break_down_into_end_to_end_tests_38\"><\/a>Break down into end to end tests<\/h3>\r\n<p>Explain what these tests test and why<\/p>\r\n<pre><code>Give an example\r\n<\/code><\/pre>\r\n<h3><a id=\"And_coding_style_tests_46\"><\/a>And coding style tests<\/h3>\r\n<p>Explain what these tests test and why<\/p>\r\n<pre><code>Give an example\r\n<\/code><\/pre>\r\n<h2><a id=\"Deployment_54\"><\/a>Deployment<\/h2>\r\n<p>Add additional notes about how to deploy this on a live system<\/p>\r\n<h2><a id=\"Built_With_58\"><\/a>Built With<\/h2>\r\n<ul>\r\n<li><a href=\"http:\/\/www.dropwizard.io\/1.0.2\/docs\/\">Dropwizard<\/a> - The web framework used<\/li>\r\n<li><a href=\"https:\/\/maven.apache.org\/\">Maven<\/a> - Dependency Management<\/li>\r\n<li><a href=\"https:\/\/rometools.github.io\/rome\/\">ROME<\/a> - Used to generate RSS Feeds<\/li>\r\n<\/ul>\r\n<h2><a id=\"Contributing_64\"><\/a>Contributing<\/h2>\r\n<p>Please read <a href=\"https:\/\/gist.github.com\/PurpleBooth\/b24679402957c63ec426\">CONTRIBUTING.md<\/a> for details on our code of conduct, and the process for submitting pull requests to us.<\/p>\r\n<h2><a id=\"Versioning_68\"><\/a>Versioning<\/h2>\r\n<p>We use <a href=\"http:\/\/semver.org\/\">SemVer<\/a> for versioning. For the versions available, see the <a href=\"https:\/\/github.com\/your\/project\/tags\">tags on this repository<\/a>.<\/p>\r\n<h2><a id=\"Authors_72\"><\/a>Authors<\/h2>\r\n<ul>\r\n<li><strong>Billie Thompson<\/strong> - <em>Initial work<\/em> - <a href=\"https:\/\/github.com\/PurpleBooth\">PurpleBooth<\/a><\/li>\r\n<\/ul>\r\n<p>See also the list of <a href=\"https:\/\/github.com\/your\/project\/contributors\">contributors<\/a> who participated in this project.<\/p>\r\n<h2><a id=\"License_78\"><\/a>License<\/h2>\r\n<p>This project is licensed under the MIT License - see the <a href=\"LICENSE.md\">LICENSE.md<\/a> file for details<\/p>\r\n<h2><a id=\"Acknowledgments_82\"><\/a>Acknowledgments<\/h2>\r\n<ul>\r\n<li>Hat tip to anyone whose code was used<\/li>\r\n<li>Inspiration<\/li>\r\n<li>etc<\/li>\r\n<\/ul>"
	},
	{
		"name": "html",
		"folders":[
			{

				"name": "assets",
				"icon": "fas fa-folder",
				"comment": "Init commit",
				"date": "2 months ago"
			}
		],
		"files": [
			{
				"name": "index.html",
				"icon": "far fa-file-alt",
				"comment": "Updated links and started contact.html",
				"date": "2 months ago"
			},
			{
				"name": "style.css",
				"icon": "far fa-file-alt",
				"comment": "fixed style issue with footer",
				"date": "2 months ago"
			},
			{
				"name": "contact.html",
				"icon": "far fa-file-alt",
				"comment": "Added contact form",
				"date": "2 months ago"

			},
			{
				"name": "README.MD",
				"icon": "far fa-file-alt",
				"comment": "Init commit",
				"date": "2 months ago"

			},
			{
				"name": "favicon.ico",
				"icon": "far fa-file-alt",
				"comment": "Init commit",
				"date": "2 months ago"

			},
			{
				"name": "main.js",
				"icon": "far fa-file-alt",
				"comment": "Init commit",
				"date": "2 months ago"

			}
		],
		"readmeContent":
			"<h1><a id=\"Project_Title_0\"><\/a>Project Title<\/h1>\r\n<p>One Paragraph of project description goes here<\/p>\r\n<h2><a id=\"Getting_Started_4\"><\/a>Getting Started<\/h2>\r\n<p>These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.<\/p>\r\n<h3><a id=\"Prerequisites_8\"><\/a>Prerequisites<\/h3>\r\n<p>What things you need to install the software and how to install them<\/p>\r\n<pre><code>Give examples\r\n<\/code><\/pre>\r\n<h3><a id=\"Installing_16\"><\/a>Installing<\/h3>\r\n<p>A step by step series of examples that tell you how to get a development env running<\/p>\r\n<p>Say what the step will be<\/p>\r\n<pre><code>Give the example\r\n<\/code><\/pre>\r\n<p>And repeat<\/p>\r\n<pre><code>until finished\r\n<\/code><\/pre>\r\n<p>End with an example of getting some data out of the system or using it for a little demo<\/p>\r\n<h2><a id=\"Running_the_tests_34\"><\/a>Running the tests<\/h2>\r\n<p>Explain how to run the automated tests for this system<\/p>\r\n<h3><a id=\"Break_down_into_end_to_end_tests_38\"><\/a>Break down into end to end tests<\/h3>\r\n<p>Explain what these tests test and why<\/p>\r\n<pre><code>Give an example\r\n<\/code><\/pre>\r\n<h3><a id=\"And_coding_style_tests_46\"><\/a>And coding style tests<\/h3>\r\n<p>Explain what these tests test and why<\/p>\r\n<pre><code>Give an example\r\n<\/code><\/pre>\r\n<h2><a id=\"Deployment_54\"><\/a>Deployment<\/h2>\r\n<p>Add additional notes about how to deploy this on a live system<\/p>\r\n<h2><a id=\"Built_With_58\"><\/a>Built With<\/h2>\r\n<ul>\r\n<li><a href=\"http:\/\/www.dropwizard.io\/1.0.2\/docs\/\">Dropwizard<\/a> - The web framework used<\/li>\r\n<li><a href=\"https:\/\/maven.apache.org\/\">Maven<\/a> - Dependency Management<\/li>\r\n<li><a href=\"https:\/\/rometools.github.io\/rome\/\">ROME<\/a> - Used to generate RSS Feeds<\/li>\r\n<\/ul>\r\n<h2><a id=\"Contributing_64\"><\/a>Contributing<\/h2>\r\n<p>Please read <a href=\"https:\/\/gist.github.com\/PurpleBooth\/b24679402957c63ec426\">CONTRIBUTING.md<\/a> for details on our code of conduct, and the process for submitting pull requests to us.<\/p>\r\n<h2><a id=\"Versioning_68\"><\/a>Versioning<\/h2>\r\n<p>We use <a href=\"http:\/\/semver.org\/\">SemVer<\/a> for versioning. For the versions available, see the <a href=\"https:\/\/github.com\/your\/project\/tags\">tags on this repository<\/a>.<\/p>\r\n<h2><a id=\"Authors_72\"><\/a>Authors<\/h2>\r\n<ul>\r\n<li><strong>Billie Thompson<\/strong> - <em>Initial work<\/em> - <a href=\"https:\/\/github.com\/PurpleBooth\">PurpleBooth<\/a><\/li>\r\n<\/ul>\r\n<p>See also the list of <a href=\"https:\/\/github.com\/your\/project\/contributors\">contributors<\/a> who participated in this project.<\/p>\r\n<h2><a id=\"License_78\"><\/a>License<\/h2>\r\n<p>This project is licensed under the MIT License - see the <a href=\"LICENSE.md\">LICENSE.md<\/a> file for details<\/p>\r\n<h2><a id=\"Acknowledgments_82\"><\/a>Acknowledgments<\/h2>\r\n<ul>\r\n<li>Hat tip to anyone whose code was used<\/li>\r\n<li>Inspiration<\/li>\r\n<li>etc<\/li>\r\n<\/ul>"
	},
	]
let tabs = [
	{
		"name": "issues",
		"icon": "fas fa-exclamation-circle",
		"description":
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores est deserunt laborum, voluptates, repellendus odit assumenda porro explicabo quis iusto voluptatum nobis dolorum?"
	},
	{
		"name": "issues",
		"icon": "fas fa-exclamation-circle",
		"description":
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores est deserunt laborum, voluptates, repellendus odit assumenda porro explicabo quis iusto voluptatum nobis dolorum?"
	},
	{
		"name": "pull requests",
		"icon": "fas fa-code-branch",
		"description":
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores est deserunt laborum, voluptates, repellendus odit assumenda porro explicabo quis iusto voluptatum nobis dolorum?"
	},
	{
		"name": "projects",
		"icon": "fas fa-project-diagram",
		"description":
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores est deserunt laborum, voluptates, repellendus odit assumenda porro explicabo quis iusto voluptatum nobis dolorum?"
	},
	{
		"name": "wiki",
		"icon": "fas fa-book-open",
		"description":
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores est deserunt laborum, voluptates, repellendus odit assumenda porro explicabo quis iusto voluptatum nobis dolorum?"
	},
	{
		"name": "insights",
		"icon": "fas fa-chart-bar",
		"description":
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores est deserunt laborum, voluptates, repellendus odit assumenda porro explicabo quis iusto voluptatum nobis dolorum?"
	}
]
