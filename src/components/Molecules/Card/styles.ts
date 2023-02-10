import styled, { css } from "styled-components/native"
import { CardInterface } from "./interface"

export const MainCard = styled.View<CardInterface>`
    flex-direction: column;
    width: 90%;
    height: 60%;
    align-items: center;
    justify-content: center;
    
    padding: 10px 15px;

    ${({backgroundColor}) =>
    backgroundColor &&
    css `
    background-color: ${backgroundColor}
    `
    }
`
export const ListCard = styled.View<CardInterface>`
    width: 95%;
    height: 15%;
    padding: 0px 15px;

    flex-direction: row;
    align-items: center;


    ${({backgroundColor}) =>
    backgroundColor &&
    css `
    background-color: ${backgroundColor}
    `
    }
`