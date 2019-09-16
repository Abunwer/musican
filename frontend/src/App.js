import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import Albums from './component/Albums';
import Artists from './component/Artists';
import Songs from './component/Songs';
import Config from './config';

const client = new ApolloClient({
    uri: Config.uri,
})
class App extends Component{
    render(){
        return (
            <ApolloProvider client={client}>
                <div className='album'>
                   <Albums/>
                </div>
                <div className='artist'>
                   <Artists/>
                </div>
                <div className='song'>
                   <Songs/>
                </div>
            </ApolloProvider>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('app'));