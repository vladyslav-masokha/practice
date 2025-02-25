import React from "react";

interface FilterBodyProps {
    logicOpenFilter: string;
    openFilterFunction: () => void;
    setYearFilter: React.Dispatch<React.SetStateAction<[number, number] | null>>;
    setGenreFilter: React.Dispatch<React.SetStateAction<string | null>>;
    setAgeFilter: React.Dispatch<React.SetStateAction<string | null>>;
    availableGenres: string[];
    availableAgeRatings: string[];
    applyFilters: () => void;
}

export type { FilterBodyProps };