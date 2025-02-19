import React from 'react'
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import styles from '../Filter.module.scss';
import { radioStyles } from '../filterStyles/radioStyles.ts';

interface GenreFilterProps {
	setGenreFilter: (genreFilter: string | null) => void;
	applyFilters: () => void;
	availableGenres: string[];
}

const GenreFilter: React.FC<GenreFilterProps> = ({
	setGenreFilter,
	applyFilters,
	availableGenres,
}) => {
	const handleGenreChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setGenreFilter(event.target.value === '' ? null : event.target.value);
		applyFilters();
	};

	return (
		<div className={styles.filterGenre}>
			<h3>Жанр</h3>

			<FormControl>
				<RadioGroup
					aria-labelledby="genre-radio-buttons-group-label"
					defaultValue=""
					onChange={handleGenreChange}
					name="genre-radio-buttons-group"
				>
					
					{availableGenres.map((genre) => (
						<FormControlLabel
							key={genre}
							value={genre}
							control={<Radio sx={radioStyles} />}
							label={genre}
						/>
					))}
					<FormControlLabel
						value=""
						control={<Radio sx={radioStyles} />}
						label="Всі жанри"
					/>
				</RadioGroup>
			</FormControl>
		</div>
	);
};

export { GenreFilter };