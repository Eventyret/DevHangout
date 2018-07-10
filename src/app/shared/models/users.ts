export interface User {
	id: number;
	email: string;
	profile: Profile;
}

export interface Profile {
	user: string;
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
	instagram: string;
	youtube: string;
	github: string;
	donator: boolean;
	skills: Skills;
}
export interface Skills {
	id: number;
	name: string;
	icon: string;
}
