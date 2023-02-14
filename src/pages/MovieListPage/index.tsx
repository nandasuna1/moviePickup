import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import MovieList from '../../components/Templates/MovieList'
import { StackParamsListInterface } from '../../routes/inrteface';

type Props = NativeStackScreenProps<StackParamsListInterface, 'MovieList' >

export  function MovieListPage({navigation}: Props) {

  const handleOnPress = () => {
    navigation.goBack();
  }
  return (
    <>
      <MovieList 
      HeaderProps={{
        isMain: false,
          IconProps: {
            onPress: handleOnPress,
            isBack: true
          },
        }}/>
    </>
  )
}
