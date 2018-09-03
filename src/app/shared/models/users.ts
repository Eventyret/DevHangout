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
	id: number;
	name: string;
	icon: string;
}

export interface User {
	id: number;
	username: string;
	email: string;
	profile?: Profile[];
	education?: Education[];
	experience?: Experience[];
	skills?: Skill[];
}
