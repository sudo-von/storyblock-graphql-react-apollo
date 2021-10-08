import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {   ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://gapi.storyblok.com/v1/api',
  cache: new InMemoryCache(),
  request: operation => {
    operation.setContext({
      headers: {
        token: process.env.REACT_APP_STORYBLOCK_API_KEY,
        version: 'draft'
      }
    })
  }
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)