interface IFilm {
	id: number;
	imdbID: string;
	title: string;
	year: number;
	country: string;
	duration: string;
	ageRating: string;
	description: string;
	img: string;
	link: string;
	premiere: { country: string; date: string }[];
	genre: string[];
	actors: string[];
	directors: string[];
	rating: number;
}

export type { IFilm }
