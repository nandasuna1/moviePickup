import { IconInterface } from "../../Atoms/Icon/interface";

export interface HeaderInterface {
    title?: string;
    isMain?: boolean;
    IconProps?: IconInterface;
    color?: string;
    backgroundColor?: string;
    iconColor?: string;
}