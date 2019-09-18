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
            
                <Query query={ALBUMS_QUERY}>
                    {
                        ({loading, error, data})=>{
                            if(loading) return <h6>loading</h6>
                            if(error) console.log(error);
                            if(data){
                                return (
                                    <Fragment>
                                        {
                                            data.albums.map(album=>(
                                                <div className='card'>
                                                    <p><spane>Title: </spane>{album.title}</p>
                                                    <p><spane>Release Date: </spane>{album.releaseDate}</p>
                                                    <p><spane>Gender: </spane>{album.genre}</p>
                                                    <p><spane>Price: </spane>{album.price}</p>
                                                </div>
                                            ))
                                        }
                                    </Fragment>
                                )
                            }{
                                return(<p>None</p>)
                            }
                        }
                    }
                </Query>
        )
    }
}

