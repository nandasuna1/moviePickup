import { ButtonInterface } from "../../Atoms/Button/interface";
import { CardInterface } from "../../Molecules/Card/interface";
import { HeaderInterface } from "../../Molecules/Header/interface";

export interface MovieSelectionInterface {
    HeaderProps?: HeaderInterface;
    CardProps?: CardInterface;
    ButtonProps?: ButtonInterface,
    backgroundColor?: string;
}