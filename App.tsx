import { ThemeProvider } from 'styled-components/native';
import theme from'./src/configs/const'
import Routes from './src/routes';


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
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
