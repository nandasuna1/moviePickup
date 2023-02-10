import { StatusBar, View } from 'react-native';
import { StyleSheet } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { MovieSelectionPage } from './src/pages/MovieSelectionPage';
import theme from'./src/configs/const'
import MovieList from './src/components/Templates/MovieList';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
    {/* <View style={styles.container}> */}
      <StatusBar
      barStyle="light-content"
      translucent
      backgroundColor="transparent"
      />
      <MovieSelectionPage/>
      {/* <MovieList/> */}
     {/* </ View> */}
     </ThemeProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#08518d',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
