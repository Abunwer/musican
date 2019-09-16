import React, {Component, Fragment} from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';


const ARTISTS_QUERY = gql`
    query{
        artists{
            firstName,
            lastName,
            gender,
            nationality
        }
    }
`

export default class Artists extends Component{
    

    render(){
        return (
            <div>
                <Query query={ARTISTS_QUERY}>
                    {
                        ({loading, error, data})=>{
                            if(loading) return <h6>loading</h6>
                            if(error) console.log(error);
                            // console.log(data)
                            return (
                                <Fragment>
                                    {
                                        data.artists.map(artist=>(
                                            <div>
                                                <p>{artist.firstName}</p>
                                                <p>{artist.lastName}</p>
                                                <p>{artist.gender}</p>
                                                <p>{artist.nationality}</p>
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

