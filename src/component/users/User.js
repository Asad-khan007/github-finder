import React, {useContext} from 'react'
import { Spiner } from '../layout/spiner' 
import UserItem from './userItem';
import GithubContext from '../../context/github/githubContext';

const Users = () => {
    
    const githubContext = useContext(GithubContext)

    const {users,loading} = githubContext;
    
     if( loading ) {
        return <Spiner />
     } 

     return (
            <div>
                { users.map( user => (
                    <UserItem key={user.id} user={user} />) )
                }
            </div>
        )
    }

export default Users
