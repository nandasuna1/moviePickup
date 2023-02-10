import { DetailsInterface } from "../../Atoms/Details/interface";
import { ImageInterface } from "../../Atoms/Image/interface";

export interface CardInterface {
    DetailsProps?: DetailsInterface;
    ImageProps?: ImageInterface;
    isList?: boolean;
    backgroundColor?: string;
}
