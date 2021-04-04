import React from 'react'
import { Spiner } from '../layout/spiner'
// import { Spiner } from '../layout/spiner';
import UserItem from './userItem';
import PropTypes from 'prop-types';

const Users = ( {users,loading} ) => {
     
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

Users.propTypes = {
    loading: PropTypes.bool.isRequired , 
    users: PropTypes.array.isRequired
}

export default Users
