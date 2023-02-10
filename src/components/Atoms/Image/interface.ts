import { ImageSourcePropType } from 'react-native';

export interface ImageInterface {
  source?: ImageSourcePropType;
  resizeMode?: 'cover' | 'contain' | 'repeat' | 'center'; //| 'stretch';
  width?: number;
  height?: number;
  radius?: number;
}