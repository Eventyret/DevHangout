export interface Profile {
	id: number;
	firstName?: string;
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
}

export interface Education {
	id: number;
	user: number;
	school: string;
	qualification: string;
	fieldOfStudy: string;
	dateFrom: string;
	dateTo?: string;
	current: boolean;
}

export interface Experience {
	id: number;
	user: number;
	jobTitle: string;
	company: string;
	location: string;
	dateFrom: string;
	dateTo?: string;
	current: boolean;
}

export interface Skill {
	user: number;
	id?: number;
	skillID: any;
	name: string;
	icon: string;
	owned: boolean;
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
	project: Project;
	tabs: Tab[];
}

export interface Donations {
	id: number;
	user: number;
	amount: string;
	date: number;
	token: string;
	ip: string;
}

export interface Folder {
	name: string;
	icon: string;
	comment: string;
	date: string;
}

export interface File {
	name: string;
	icon: string;
	comment: string;
	date: string;
}

export interface Project {
	name: string;
	folders: Folder[];
	files: File[];
	readmeContent: string;
}

export interface Tab {
	name: string;
	icon: string;
	description: string;
}

export interface User {
	id: number;
	username: string;
	email: string;
	password?: string;
	profile?: Profile[];
	education?: Education[];
	experience?: Experience[];
	skills?: Skill[];
	repo?: Repo[];
	donation: Donations[];
}
