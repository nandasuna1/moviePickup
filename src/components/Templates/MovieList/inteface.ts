import { CardInterface } from "../../Molecules/Card/interface";
import { HeaderInterface } from "../../Molecules/Header/interface";

export interface MovieListInterface {
    HeaderProps?: HeaderInterface;
    CardProps?: CardInterface;
    backgroundColor?: string;
}