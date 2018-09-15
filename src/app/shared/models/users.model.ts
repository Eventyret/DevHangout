
/**
 * A Single Users Profile Data
 */
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


/**
 * A users Education data
 */
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


/**
 * A users Experience data
 */
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


/**
 * A single skill for a user
 */
export interface Skill {
	user: number;
	id?: number;
	skillID: any;
	name: string;
	icon: string;
	owned: boolean;
}


/**
 * Fake users Github Repo Data
 */
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
	homepage?: string;
	tabs: Tab[];
}


/**
 * A Single donation
 */
export interface Donations {
	id: number;
	user: number;
	amount: string;
	date: number;
	token: string;
	ip: string;
}


/**
 * Fake folder used in Fake users github data
 */
export interface Folder {
	name: string;
	icon: string;
	comment: string;
	date: string;
}


/**
 * Fake file used in Fake users github data
 */
export interface File {
	name: string;
	icon: string;
	comment: string;
	date: string;
}


/**
 * Project structure used for Fake users Github Data
 */
export interface Project {
	name: string;
	folders: Folder[];
	files: File[];
	readmeContent: string;
}


/**
 * Tab structure used for Fake users Github Data
 */
export interface Tab {
	name: string;
	icon: string;
	description: string;
}


/**
 * A Single User fake or real
 * The repo is optional for fake users.
 */
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
