module.exports = () => {
	let faker = require("faker");
	let _ = require("lodash");
	return {
		users: _.times(1001, function(n) {
			let skillsData = [];
			let titlesData = [];
			let eduData = [];
			let expData = [];
			let username = faker.internet.userName();
			let randomSet = _.sample([1, 2, 3, 4]);
			let diplomaData = _.sample(diploma);
			let studyData = _.sample(study);
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
							current: faker.random.boolean()
						};
						expData.push(experience);
					}
				);
				return expData;
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
					location: faker.address.country(),
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
				skills: skillsData
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
let titles = ["Developer", "Junior Developer", "Mid Developer", "Senior Developer", "Full Stack Developer", "Student", "Instructor", "Intern"];
let diploma = ["A-level", "Higher National Diploma", "Bachelor Degree", "Master Degree", "Doctoral Degree"];
let study = [
	"Computer Science",
	"Information Technology",
	"Software Development",
	"Software Engineering",
	"Mathematics",
	"Business Information Systems"
];
let aboutMe = [];
