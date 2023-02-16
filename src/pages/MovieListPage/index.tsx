import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import MovieList from '../../components/Templates/MovieList'
import { StackParamsListInterface } from '../../routes/inrteface';
import { Button, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonCoponent } from '../../components/Atoms/Button/styles';
import { Icon } from '../../components/Atoms/Icon';
import { Container } from '../../components/Templates/MovieList/styles';
import  Actions from '../../redux/Counter/action';
type Props = NativeStackScreenProps<StackParamsListInterface, 'MovieList' >

export  function MovieListPage({navigation}: Props) {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const handleOnPress = () => {
    navigation.goBack();
  }
  return (
    <>
      {/* <MovieList 
      HeaderProps={{
        isMain: false,
          IconProps: {
            onPress: handleOnPress,
            isBack: true
          },
        }}/> */}

      <Container>
        <Icon
          onPress={() => dispatch(Actions.decrementing())}
          isBack={true}
          color='#000'
        />
        <Text>{count}</Text>
        <Icon
          onPress={() => dispatch(Actions.incrementing())}
          color='#000'
        />
      </Container>
    </>
)}
