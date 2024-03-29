// import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './style/index.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <Router>
      <App />
    </Router>
  </ChakraProvider>
);
