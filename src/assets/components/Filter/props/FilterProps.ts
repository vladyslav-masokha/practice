import { IFilm } from "../../../interfaces/IFilm.ts";
import {Dispatch, SetStateAction} from "react";

interface FilterProps {
    data: IFilm[]
    setFilteredProducts: Dispatch<SetStateAction<IFilm[]>>
}

export type { FilterProps }