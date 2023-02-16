import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect } from 'react'
import { useGetMoviesQuery } from '../../api/moviesApi';
import MovieSelection from '../../components/Templates/MovieSelection'
import { StackParamsListInterface } from '../../routes/inrteface';


type Props = NativeStackScreenProps<StackParamsListInterface, 'MovieSelection' >

export  function MovieSelectionPage({navigation}: Props) {

  const {data, isLoading, isError, error, status} = useGetMoviesQuery();

  useEffect(() => {
    console.log(data);
  },[isLoading])
  
  
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
