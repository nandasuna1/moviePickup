import React from 'react'
import { StatusBar } from 'react-native'
import { Button } from '../../Atoms/Button'
import {Card} from '../../Molecules/Card'
import { Header } from '../../Molecules/Header'
import { MovieSelectionInterface } from './interface'
import { ButtonContainer, Container } from './styles'

export default function MovieSelection(props: MovieSelectionInterface) {
    const  {HeaderProps, CardProps, backgroundColor='#08518d'} = props
  
    return (
      <>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Container backgroundColor={backgroundColor}>
      <Header {...HeaderProps} />
      <Card {...CardProps}/>
      <ButtonContainer>
        <Button title='NO' color='#fff' backgroudColor='#ff0000' size='big' />
        <Button title='YES' color='#fff' backgroudColor='#00a775' size='big'/>
      </ButtonContainer>  
      </Container>
      
    </>

 )
}
