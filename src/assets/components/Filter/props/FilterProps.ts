import {Film} from "../../../interfaces/IFilm.ts";
import {Dispatch, SetStateAction} from "react";

interface FilterProps {
    films: Film[]
    setFilteredProducts: Dispatch<SetStateAction<Film[]>>
}

export type { FilterProps }