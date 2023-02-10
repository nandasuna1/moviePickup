import styled from 'styled-components/native'
import { EmptyListInterface } from './interface'

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-content: center;
`

export const Message = styled.Text<EmptyListInterface>`
    text-align: center;

    font-size: 15px;
    color: ${({color}) => color || '#000'};
`