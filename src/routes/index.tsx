import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
// import AppRoutes from './commons'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackParamsListInterface } from './inrteface';
import { MovieSelectionPage } from '../pages/MovieSelectionPage';
import { MovieListPage } from '../pages/MovieListPage';

const Stack = createNativeStackNavigator<StackParamsListInterface>();


export default function Routes() {
  return (
    <NavigationContainer>
        {/* <AppRoutes /> */}
        <Stack.Navigator initialRouteName='MovieSelection' screenOptions={{headerShown:false}}>
          <Stack.Screen name='MovieSelection' component={MovieSelectionPage}/>
          <Stack.Screen name='MovieList' component={MovieListPage}/>
    </Stack.Navigator>
    </NavigationContainer>
  )
}
