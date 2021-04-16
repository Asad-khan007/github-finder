import React from 'react';
import propsTypes from 'prop-types';
import {Link} from 'react-router-dom';

const UserItem = ({ user: {login , avatar_url } }) => {
        return (
            <div className='card'>    
                <img src={avatar_url} className='userItem' alt="Profile" />
                <h3>{login}</h3>
                <Link to={`/user/${login}`}>Profile</Link>
            </div>
        )
    }

UserItem.propsTypes = {
    user: propsTypes.object.isRequired,
}    

export default UserItem
