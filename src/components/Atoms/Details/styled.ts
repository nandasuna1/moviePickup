import { RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"
import { DetailsInterface } from "./interface"

const TEXT_COLOR = '#fff'

export const Container = styled.View<DetailsInterface>`
    width: 100%;
    margin: 32px 0;
    padding: 10px 15px;
`

export const Title = styled.Text<DetailsInterface>`
    text-align: left;
    font-size: ${({isMain}) => isMain ? 30 : 20}px;
    color: ${TEXT_COLOR};
`

export const Subtitle = styled.Text<DetailsInterface>`
    text-align: left;
    font-size: ${({isMain}) => isMain ? 20 : 15}px;
    color: ${TEXT_COLOR};
`