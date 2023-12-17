import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import {
  ChakraProvider, extendTheme
} from '@chakra-ui/react';
import store, { StoreContext } from './stores';
import '@fontsource/anton';

const theme = extendTheme({
  fonts: { body: '\'anton\', sans-serif' },
  styles: {
    global: {
      html: { overflow: 'hidden' },
      body: {
        backgroundColor: 'red',
        overflow: 'hidden'
      }
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </StoreContext.Provider>
  </React.StrictMode>
);
