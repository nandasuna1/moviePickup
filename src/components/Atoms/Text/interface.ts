export interface TextInterface {
    size?: number;
    // size?: 'small' | 'normal' | 'big';
    weight?: number;
    color?: string;
    align?: 'center' | 'right' | 'left';
    children?: React.ReactNode;
}