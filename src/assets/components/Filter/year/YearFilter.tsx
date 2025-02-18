import { TextField } from '@mui/material'
import { useEffect, useState } from 'react'
import { valueLabelFormatAge } from '../../../globalLogic/valueLabelFormatAge'
import styles from '../Filter.module.scss'
import { sliderStyle as Slider } from '../filterStyles/sliderStyle'

interface AgeProps {
	setYearFilter: (yearRange: [number, number] | null) => void
	applyFilters: () => void
}

const YearFilter: React.FC<AgeProps> = ({ setYearFilter, applyFilters }) => {
	const [yearRange, setYearRange] = useState<[number, number]>([2006, 2025])

	useEffect(() => applyFilters(), [yearRange, applyFilters])

	const handleAgeChange = (_event: Event, newValue: number | number[]) => {
		if (Array.isArray(newValue)) setYearRange([newValue[0], newValue[1]])
		else setYearRange([0, newValue])
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
		<div className={styles.filterAge}>
			<h3>Рік</h3>

			<Slider
				value={yearRange}
				onChange={handleAgeChange}
				onChangeCommitted={() => setYearFilter(yearRange)}
				color='secondary'
				valueLabelDisplay='auto'
				valueLabelFormat={valueLabelFormatAge}
				min={2006}
				max={2025}
			/>

			<div className={styles.filterAgeInputs}>
				<TextField
					placeholder='2006'
					value={yearRange[0]}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						handleInputChange(e, 'min')
					}
					type='number'
					InputProps={{ inputProps: { min: 2006, max: yearRange[1] } }}
				/>
				<TextField
					placeholder='2025'
					value={yearRange[1]}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						handleInputChange(e, 'max')
					}
					type='number'
					InputProps={{ inputProps: { min: yearRange[0], max: 2025 } }}
				/>
			</div>
		</div>
	)
}

export { YearFilter }
