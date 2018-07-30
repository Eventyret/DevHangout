export interface Profile {
	user: number;
	firstName: string;
	lastName: string;
	avatar: string;
	location: string;
	website: string;
	company: string;
	title: string;
	backgroundImage: string;
	bio: string;
	twitter: string;
	facebook: string;
	linkedin: string;
	instagram: string;
	youtube: string;
	github: string;
	donator: boolean;
	testimonal: string;
}

export interface Education {
	user: number;
	school: string;
	qualification: string;
	fieldOfStudy: string;
	dateFrom: string;
	dateTo: string;
	description: string;
}

export interface Experience {
	user: number;
	jobTitle: string;
	company: string;
	dateFrom: string;
	dateTo: string;
	current: boolean;
	description: string;
	location: string;
}

export interface Skill {
	id: number;
	name: string;
	icon: string;
}

export interface Repo {
	name: string;
	html_url: string;
	description: string;
	stargazers_count: number;
	watchers_count: number;
	forks_count: number;
	open_issues_count: number;
	updated_at: string;
}

export interface User {
	id: number;
	username: string;
	email: string;
	profile: Profile;
	education: Education[];
	experience: Experience[];
	skills: Skill[];
	repo?: Repo[];
}
