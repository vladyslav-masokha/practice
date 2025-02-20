import React from 'react'
import styles from "./Filter.module.scss";
import {Close} from "@mui/icons-material";
import { YearFilter } from "./filters/YearFilter.tsx";
import { GenreFilter } from "./filters/GenreFilter.tsx";
import {Search} from "../../ui/Search/Search.tsx";

interface FilterBodyProps {
    logicOpenFilter: string;
    openFilterFunction: () => void;
    setYearFilter: React.Dispatch<React.SetStateAction<[number, number] | null>>;
    setGenreFilter: React.Dispatch<React.SetStateAction<string | null>>;
    applyFilters: () => void;
    availableGenres: string[];
}


const FilterBody: React.FC<FilterBodyProps> = ({
    logicOpenFilter,
    openFilterFunction,
    setYearFilter,
    setGenreFilter,
    applyFilters,
    availableGenres,
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
        </div>
    );
};

export { FilterBody };