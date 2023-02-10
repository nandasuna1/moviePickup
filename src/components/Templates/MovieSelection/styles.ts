import styled, { css } from "styled-components/native";
import { MovieSelectionInterface } from "./interface";

export const Container = styled.View<MovieSelectionInterface>`
    flex: 1;
    width: 100%;
    height: 100%;
    
    /* padding: 0px 3%; */
    /* padding: 24px; */

    align-items: center;
    justify-content: space-evenly;

    ${({backgroundColor}) =>
    backgroundColor &&
    css `
    background-color: ${backgroundColor}
    `
    }
`

export const ButtonContainer = styled.View`
    width: 100%;
    flex-direction: row;

    /* margin-top: 5%; */
    padding: 0 15%;
    justify-content: space-between;
`