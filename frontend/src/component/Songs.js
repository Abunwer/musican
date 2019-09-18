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
            
            <Query query={SONGS_QUERY}>
                {
                    ({loading, error, data})=>{
                        if(loading) return <h6>loading</h6>
                        if(error) console.log(error);
                        if(data){
                            return (
                                <Fragment>
                                    {
                                        data.songs.map(song=>(
                                            <div className='card'>
                                                <p><span>Title: </span>{song.title}</p>
                                                <p><spane>Song Length: </spane>{song.length}</p>
                                            </div>
                                        ))
                                    }
                                </Fragment>
                            )
                        }else{
                            return(<p>None</p>)
                        }
                    }
                }
            </Query>
            
        )
    }
}


