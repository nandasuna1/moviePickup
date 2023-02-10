import styled, {css} from "styled-components/native";
import { ButtonInterface } from "./interface";
import { RFValue } from 'react-native-responsive-fontsize';

// export const Container = styled.View``;

export const Text =  styled.Text<ButtonInterface>`
  ${({ size }) => setFontSize[size] };
  font-weight: bold;
  text-align: center;

  color: ${({color}) => color};
`

export const ButtonCoponent = styled.TouchableOpacity<ButtonInterface>`
  ${({ size }) => setSize[size] };
  border-color: ${({color}) => color || '#000'};
  color: ${({color}) => color || '#000'};
  border-width: 2px;
  background-color: ${({backgroudColor}) => backgroudColor || '#F00'};
`;

const setSize = {
  small: css`
  padding: ${RFValue(8)}px;
  border-radius: ${RFValue(10)}px;
  `,
  normal: css`
    padding: ${RFValue(12)}px;
    border-radius: ${RFValue(14)}px;
  `,
  big: css`
    padding: ${RFValue(16)}px;
    border-radius: ${RFValue(16)}px;
    `,
}

const setFontSize = {
  small: css`
    font-size: ${RFValue(12)}px;
  `,
  normal: css`
      font-size: ${RFValue(16)}px;
  `,
  big: css`
      font-size: ${RFValue(18)}px;
    `,
}