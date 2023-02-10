import { EmptyListInterface } from "./interface";
import { Container, Message } from "./styles";

export function ListEmpty({message, color}: EmptyListInterface) {
    return(
        <Container >
            <Message color={color} >{message}</Message>
        </Container>
    )
}