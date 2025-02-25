interface IFilm {
	imdbID: string
	title: string
	year: number
	country: string
	duration: string
	ageRating: string
	premiere: {
		USA: string;
		UKR: string;
	}
	genre: string[]
	description: string
	img: string
	link: string
}

export type { IFilm }
