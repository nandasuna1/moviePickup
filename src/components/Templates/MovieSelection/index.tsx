import React from 'react'
import { Button } from '../../Atoms/Button'
import {Card} from '../../Molecules/Card'
import { Header } from '../../Molecules/Header'
import { MovieSelectionInterface } from './interface'
import { ButtonContainer, Container } from './styles'

export default function MovieSelection(props: MovieSelectionInterface) {
    const  {HeaderProps, ButtonProps, CardProps, backgroundColor='#000'} = props
 return (
    <Container backgroundColor={backgroundColor}>
    <Header {...HeaderProps} />
    <Card 
        DetailsProps={{title:'Avatar 2', subtitle:'O inimigo agora é outro'}}
        isList={false}
    />
    <ButtonContainer>
        <Button title='NO' color='#fff' backgroudColor='#ff0000' size='big' />
        <Button title='YES' color='#fff' backgroudColor='#00a775' size='big'/>
    </ButtonContainer>  
    </Container>
 )
}
