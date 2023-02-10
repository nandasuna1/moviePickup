import styled, { css } from "styled-components/native";
import { HeaderInterface } from "./interface";

export const Container = styled.View<HeaderInterface>`
    width:100%;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px 15px;

    ${({backgroundColor}) =>
    backgroundColor &&
    css `
    background-color: ${backgroundColor}
    `
    }
`

export const Title = styled.Text<HeaderInterface>`
    text-align: center;
    font-size: 30px;
    /* color: ${props => props.color || '#f0f'}; */
    ${({color}) =>
    color &&
    css `
    color: ${color}
    `
    }
`