import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { ApolloProvider } from '@apollo/client/react'

const client = new ApolloClient({
  // uri: 'http://localhost:5000/graphql',
  uri: 'https://books-library-graphql-server.herokuapp.com/graphql',
  cache: new InMemoryCache(),
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
