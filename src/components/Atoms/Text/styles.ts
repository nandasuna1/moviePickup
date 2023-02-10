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

// export const Text =  styled.Text<TextInterface>`
//   color: ${props => props.color};
//   ${({ size }) => setFontSize[size] };
//   font-weight: bold;
//   text-align: center;
// `
// const setFontSize = {
//   small: css`
//     font-size: ${RFValue(12)}px;
//   `,
//   normal: css`
//       font-size: ${RFValue(16)}px;
//   `,
//   big: css`
//       font-size: ${RFValue(18)}px;
//     `,
// }