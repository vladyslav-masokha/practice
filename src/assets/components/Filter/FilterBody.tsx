import React from 'react'
import styles from "./Filter.module.scss";
import { Close } from "@mui/icons-material";
import { YearFilter } from "./filters/YearFilter.tsx";
import { GenreFilter } from "./genre/GenreFilter.tsx";
import { ButtonApplyFilter } from "./applyFilter/ButtonApplyFilter.tsx";

interface FilterBodyProps {
    logicOpenFilter: string; // Тип для класу
    openFilterFunction: () => void; // Тип для функції
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

            <YearFilter setYearFilter={setYearFilter} applyFilters={applyFilters} />
            <GenreFilter
                setGenreFilter={setGenreFilter}
                applyFilters={applyFilters}
                availableGenres={availableGenres}
            />

            <ButtonApplyFilter
                applyFilters={applyFilters}
                openFilterFunction={openFilterFunction}
            />
        </div>
    );
};

export { FilterBody };