import React from 'react'
import { FlatList, StatusBar } from 'react-native'
import { Details } from '../../Atoms/Details'
import { ListEmpty } from '../../Atoms/EmptyList'
import { Icon } from '../../Atoms/Icon'
import { Card } from '../../Molecules/Card'
import { Header } from '../../Molecules/Header'
import { MovieListInterface } from './inteface'
import { Container } from './styles'

type dataProps = {
    title: string;
    subtitle: string;
    id: number;
}
const DATA = [
    {id: 1, title: 'Avatar', subtitle:'Genero: Ação'},
    {id: 2, title: 'Avatar 1', subtitle:'Genero: Ação'},
    {id: 3, title: 'Avatar 2', subtitle:'Genero: Ação'},
    {id: 4, title: 'Avatar 3', subtitle:'Genero: Ação'}

]
export default function MovieList(props : MovieListInterface) {
  const {backgroundColor="#08518d", HeaderProps} = props
  return (
    <>
      <StatusBar
      barStyle="light-content"
      translucent
      backgroundColor="transparent"
      />
      <Container backgroundColor={backgroundColor}>
      <Header {...HeaderProps} />
      <FlatList
        data={DATA}
        keyExtractor={item => item.title}
        renderItem={({item}) => (
          <Card
            DetailsProps={{title:item.title, subtitle:item.subtitle}}
            isList={true}
            backgroundColor='#000'
          />
        )}
        contentContainerStyle={DATA.length === 0 && {flex: 1}}
        ListEmptyComponent={() => (
          <ListEmpty 
            message='Que tal cadastrar a primeira turma?'
          />
        )}
      />
    </Container>
    </>

  )
}

/* <Header/>

/> */