import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'
import App from './App';
import { ApolloProvider } from '@apollo/client';
import client from './Graphql/data';

const root = createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
);