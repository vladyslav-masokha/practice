import React from 'react'
import styles from "./Filter.module.scss";
import { Close } from "@mui/icons-material";
import { YearFilter } from "./filters/YearFilter.tsx";
import { GenreFilter } from "./filters/GenreFilter.tsx";
import { Search } from "../../ui/Search/Search.tsx";
import {AgeFilter} from "./filters/AgeFilter.tsx";

interface FilterBodyProps {
    logicOpenFilter: string;
    openFilterFunction: () => void;
    setYearFilter: React.Dispatch<React.SetStateAction<[number, number] | null>>;
    setGenreFilter: React.Dispatch<React.SetStateAction<string | null>>;
    setAgeFilter: React.Dispatch<React.SetStateAction<string | null>>;
    applyFilters: () => void;
    availableGenres: string[];
    availableAgeRatings: string[];
}

const FilterBody: React.FC<FilterBodyProps> = ({
    logicOpenFilter,
    openFilterFunction,
    setYearFilter,
    setGenreFilter,
    setAgeFilter,
    applyFilters,
    availableGenres,
    availableAgeRatings
}) => {
    return (
        <div className={logicOpenFilter}>
            <button className={styles.closeFilter} onClick={openFilterFunction}>
                <Close />
            </button>

            <Search />

            <YearFilter setYearFilter={setYearFilter} applyFilters={applyFilters} />
            <GenreFilter
                setGenreFilter={setGenreFilter}
                applyFilters={applyFilters}
                availableGenres={availableGenres}
            />

            <AgeFilter
                setAgeFilter={setAgeFilter}
                applyFilters={applyFilters}
                availableAgeRatings={availableAgeRatings}
            />
        </div>
    );
};

export { FilterBody };