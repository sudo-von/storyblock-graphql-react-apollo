import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import App from './App'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

const client = new ApolloClient({
  uri: 'https://gapi.storyblok.com/v1/api',
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