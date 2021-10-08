import React from 'react'
import { 
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql } from '@apollo/client'
import Components from './components';

const query = gql`{
  PageItem(id: "home"){
    id
    slug
    content {
      _uid
      component
      body
    }
  }
}`

const App = () => {

  const { loading, error, data } = useQuery(query)
  console.log(data)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :</p>
  return (
    <div>
      {Components(data.PageItem.content)}
    </div>
  )
}

export default App