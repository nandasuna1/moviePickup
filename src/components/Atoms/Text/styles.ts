import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";
import { TextInterface } from "./interface";

export const MyText = styled.Text<TextInterface>`
    ${({size}) => 
        size &&
        css`
        font-size: ${RFValue(size)}px; 
    `};
    ${({weight}) => 
        weight &&
        css`
        font-weight: ${RFValue(weight)}px;
        `
    };
    ${({color}) => 
        color &&
        css`
        color: ${(color)};
        `
    }
    ${({ align}) => 
        align &&
        css`
        text-align: ${(align)};
        `
    }

`;
