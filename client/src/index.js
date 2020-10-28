import React from 'react';
import ReactDOM from 'react-dom';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import './index.css';

import App from './components/App';

const client = new ApolloClient({
  // uri: 'http://localhost:4000/graphql',
  uri: 'https://g7w5y.sse.codesandbox.io/'
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
