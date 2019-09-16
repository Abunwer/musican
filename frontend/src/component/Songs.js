import React, {Component, Fragment} from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';


const SONGS_QUERY = gql`
    query{
        songs{
            title,
            audioFile,
            length
        }
    }
`


export default class Songs extends Component{
    

    render(){
        return (
            <div>
                <Query query={SONGS_QUERY}>
                    {
                        ({loading, error, data})=>{
                            if(loading) return <h6>loading</h6>
                            if(error) console.log(error);
                                return (
                                    <Fragment>
                                        {
                                            data.songs.map(song=>(
                                                <div>
                                                    <p>{song.title}</p>
                                                    <p>{song.audioFile}</p>
                                                    <p>{song.length}</p>
                                                </div>
                                            ))
                                        }
                                    </Fragment>
                                )
                        }
                    }
                </Query>
            </div>
        )
    }
}


