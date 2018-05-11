export interface Users {
	id: number;
	username: string;
	name: string;
	avatar: string;
	email: string;
	location: {
		county: string;
		countryCode: string;
	};
	website: string;
	company: string;
	title: string;
	supporter: boolean;
	background: string;
	bio: string;
	skills: string;
}
