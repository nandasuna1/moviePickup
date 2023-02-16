import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';
import theme from'./src/configs/const'
import store from './src/redux/store';
import Routes from './src/routes';


export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Provider>
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
