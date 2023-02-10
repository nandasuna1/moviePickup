import { ImageInterface } from "./interface";
import DefaultImage from '../../../../assets/DFImage.png'
import { ImageComponent } from "./styles";

export function Image(props: ImageInterface) {
    const { source = DefaultImage, resizeMode = 'contain', height=50, width=50 } = props;
    return <ImageComponent {...props} source={source} resizeMode={resizeMode} height={height} width={width}/>;
}