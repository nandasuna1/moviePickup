import { TouchableOpacityProps } from "react-native";

export interface IconInterface extends TouchableOpacityProps {
    name?: string;
    // size?: 'small' | 'normal' | 'big';
    size?: number;
    // position?: 'center' | 'left' | 'right';
    color?: string;
    isBack?: boolean;
    // onPress?: () => void
}