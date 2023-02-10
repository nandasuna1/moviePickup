import { TouchableOpacityProps } from "react-native";
import { IconInterface } from "../Icon/interface";

export interface ButtonInterface extends TouchableOpacityProps {
    title?: string;
    size?: 'small' | 'normal' | 'big';
    color?: string;
    borderColor?: string;
    backgroudColor?: string;
    isLoading?: boolean;
    disabled?: boolean;
    IconProps?: IconInterface;
    // iconPosition?: 'side' | 'top';  
}