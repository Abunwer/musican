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
            
                <Query query={ARTISTS_QUERY}>
                    {
                        ({loading, error, data})=>{
                            if(loading) return <h6>loading</h6>
                            if(error) console.log(error);
                            if(data){
                                return (
                                    <Fragment>
                                        {
                                            data.artists.map(artist=>(
                                                <div className='card'>
                                                    <p><span>First Name: </span>{artist.firstName}</p>
                                                    <p><span>Last Name: </span>{artist.lastName}</p>
                                                    <p><span>Gender: </span>{artist.gender}</p>
                                                    <p><span>Nationality: </span>{artist.nationality}</p>
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

