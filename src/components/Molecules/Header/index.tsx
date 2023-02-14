import { FilmSlate } from "phosphor-react-native";
import { Icon } from "../../Atoms/Icon";
import { HeaderInterface } from "./interface";
import { Container, Title } from "./styled";

export function Header(props: HeaderInterface) {

    const { 
        isMain = true, 
        title = 'Movie Pickup', 
        IconProps,
        iconColor='#fff', 
        backgroundColor='#08518d', 
        color='#fff',
    } = props;

    return(
        <Container backgroundColor={backgroundColor} isMain={isMain}>
            {!isMain && <Icon {...IconProps} />}
            {isMain &&  <FilmSlate color={iconColor} size={50}/>}
            {<Title color={color}>{title}</Title>}
            {isMain && <Icon {...IconProps} />}
        </Container>
    )
}