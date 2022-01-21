import { Box, ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from '../theme';
import '../styles/globals.css';
import Nav from '../components/nav.js/navbar';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Nav />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
