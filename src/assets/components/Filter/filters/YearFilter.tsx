import { TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { valueLabelFormatYear } from '../../../globalLogics/valueLabelFormatYear.ts'
import styles from '../Filter.module.scss'
import { sliderStyle as Slider } from '../styles/sliderStyle'

interface YearProps {
	setYearFilter: (yearRange: [number, number] | null) => void
	applyFilters: () => void
}

const MIN_YEAR = 1972;
const MAX_YEAR = 2025;

const YearFilter: React.FC<YearProps> = ({ setYearFilter, applyFilters }) => {
	const [yearRange, setYearRange] = useState<[number, number]>([MIN_YEAR, MAX_YEAR])

	useEffect(() => applyFilters(), [yearRange, applyFilters])

	const handleAgeChange = (_event: Event, newValue: number | number[]) => {
		if (Array.isArray(newValue)) setYearRange([newValue[0], newValue[1]])
		else setYearRange([MIN_YEAR, newValue])
	}

	const handleInputChange = (
		event: React.ChangeEvent<HTMLInputElement>,
		inputType: 'min' | 'max'
	) => {
		const value = +event.target.value
		if (inputType === 'min') setYearRange([value, yearRange[1]])
		else setYearRange([yearRange[0], value])
	}

	return (
		<div className={styles.filterYear}>
			<h3>Рік</h3>

			<Slider
				value={yearRange}
				onChange={handleAgeChange}
				onChangeCommitted={() => setYearFilter(yearRange)}
				color='secondary'
				valueLabelDisplay='auto'
				valueLabelFormat={valueLabelFormatYear}
				min={MIN_YEAR}
				max={MAX_YEAR}
			/>

			<div className={styles.filterYearInputs}>
				<TextField
					placeholder={MIN_YEAR.toString()}
					value={yearRange[0]}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						handleInputChange(e, 'min')
					}
					type='number'
					InputProps={{ inputProps: { min: MIN_YEAR, max: yearRange[1] } }}
				/>
				<TextField
					placeholder={MAX_YEAR.toString()}
					value={yearRange[1]}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						handleInputChange(e, 'max')
					}
					type='number'
					InputProps={{ inputProps: { min: yearRange[0], max: MAX_YEAR } }}
				/>
			</div>
		</div>
	)
}

export { YearFilter }
