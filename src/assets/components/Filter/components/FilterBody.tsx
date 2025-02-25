import React from 'react'
import styles from "../Filter.module.scss";
import { Close } from "@mui/icons-material";
import { Search } from "../../../ui/Search/Search.tsx";
import { YearFilter } from "../filters/YearFilter.tsx";
import { GenreFilter } from "../filters/GenreFilter.tsx";
import { AgeFilter } from "../filters/AgeFilter.tsx";
import { FilterBodyProps } from "../props/FilterBodyProps.ts";

const FilterBody: React.FC<FilterBodyProps> = ({
    logicOpenFilter, openFilterFunction, setYearFilter,
    setGenreFilter, setAgeFilter, availableGenres,
    availableAgeRatings, applyFilters,
}) => {
    return (
        <div className={logicOpenFilter}>
            <button className={styles.closeFilter} onClick={openFilterFunction}>
                <Close />
            </button>

            {/* field search */}
            <Search />

            {/* year filter */}
            <YearFilter setYearFilter={setYearFilter} applyFilters={applyFilters} />

            {/* genre filter */}
            <GenreFilter
                setGenreFilter={setGenreFilter}
                applyFilters={applyFilters}
                availableGenres={availableGenres}
            />

            {/* age filter (12+, 16+, 18+ & all) */}
            <AgeFilter
                setAgeFilter={setAgeFilter}
                applyFilters={applyFilters}
                availableAgeRatings={availableAgeRatings}
            />
        </div>
    );
};

export { FilterBody };