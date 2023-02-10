import styled, { css } from "styled-components/native";
import { MovieListInterface } from "./inteface";

export const Container = styled.View<MovieListInterface>`
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