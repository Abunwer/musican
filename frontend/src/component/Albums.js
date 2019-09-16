import React, {Component, Fragment} from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';


const ALBUMS_QUERY = gql`
    query{
        albums{
            title,
            releaseDate,
            genre,
            price
        }
    }
`

export default class Albums extends Component{
    

    render(){
        return (
            <div>
                <Query query={ALBUMS_QUERY}>
                    {
                        ({loading, error, data})=>{
                            if(loading) return <h6>loading</h6>
                            if(error) console.log(error);
                            // console.log(data)
                            return (
                                <Fragment>
                                    {
                                        data.albums.map(album=>(
                                            <div>
                                                <p>{album.title}</p>
                                                <p>{album.releaseDate}</p>
                                                <p>{album.genre}</p>
                                                <p>{album.price}</p>
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

