import React from 'react'
import { FlatList } from 'react-native'
import { ListEmpty } from '../../Atoms/EmptyList'
import { Card } from '../../Molecules/Card'
import { Header } from '../../Molecules/Header'
import { Container } from './styles'

type dataProps = {
    title: string;
    subtitle: string;
    id: number;
}
const DATA = [
    {id: 1, title: 'Avatar', subtitle:'Genero: Ação'}
]
export default function MovieList() {
  return (
    <Container>
        <Header/>
        <FlatList
        data={DATA}
        keyExtractor={item => item.title}
        renderItem={({item}) => (
          <Card
            DetailsProps={{title:item.title, subtitle:item.subtitle}}
            isList={true}
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
  )
}
