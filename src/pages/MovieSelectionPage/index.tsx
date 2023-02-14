import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react'
import MovieSelection from '../../components/Templates/MovieSelection'
import { StackParamsListInterface } from '../../routes/inrteface';


type Props = NativeStackScreenProps<StackParamsListInterface, 'MovieSelection' >

export  function MovieSelectionPage({navigation}: Props) {
  
  const handleOnPress = () => {
    navigation.navigate('MovieList');
  }
  return (
    <>
        <MovieSelection
          HeaderProps={{
            IconProps: {
              onPress: handleOnPress
            },
          }}
          />
    </>
  )
}
