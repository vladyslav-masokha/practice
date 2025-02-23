import React from 'react';
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import styles from '../Filter.module.scss';
import { radioStyles } from '../styles/radioStyles.ts';

interface AgeFilterProps {
    setAgeFilter: (ageFilter: string | null) => void;
    applyFilters: () => void;
    availableAgeRatings: string[];
}

const AgeFilter: React.FC<AgeFilterProps> = ({
    setAgeFilter,
    applyFilters,
    availableAgeRatings,
}) => {
    const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAgeFilter(event.target.value === '' ? null : event.target.value);
        applyFilters();
    };

    return (
        <div className={styles.filterAge}>
            <h3>Вік</h3>

            <FormControl>
                <RadioGroup
                    aria-labelledby="age-radio-buttons-group-label"
                    defaultValue=""
                    onChange={handleAgeChange}
                    name="age-radio-buttons-group"
                >
                    {availableAgeRatings.map((ageRating) => (
                        <FormControlLabel
                            key={ageRating}
                            value={ageRating}
                            control={<Radio sx={radioStyles} />}
                            label={ageRating}
                        />
                    ))}
                    <FormControlLabel
                        value=""
                        control={<Radio sx={radioStyles} />}
                        label="Всі вікові категорії"
                    />
                </RadioGroup>
            </FormControl>
        </div>
    );
};

export { AgeFilter };