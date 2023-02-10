import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";
import { ImageInterface } from "./interface";

export const ImageComponent = styled.Image<ImageInterface>`
    ${({width}) => 
        width &&
        css`
        width: ${RFValue(width)}px; 
    `};
    ${({height}) => 
        height &&
        css`
        height: ${RFValue(height)}px;
        `
    };
    ${({ radius}) => 
        radius &&
        css`
        border-radius: ${RFValue(radius)}px;
        `
    }
`;