import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import Albums from './component/Albums';
import Artists from './component/Artists';
import Songs from './component/Songs';
import './App.css';

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
})



function App() {
  return (
    <ApolloProvider client={client}>
      <div clatssName='content'>
        <div className='box'>
          <h5>Albums</h5>
          <Albums/>
        </div>
        <div className='box'>
          <h5>Artists</h5>
          <Artists/>
        </div>
        <div className='box'>
          <h5>Songs</h5>
          <Songs/>
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
