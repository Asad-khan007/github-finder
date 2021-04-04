import React from 'react';
import propsTypes from 'prop-types';

const UserItem = ({ user: {login , avatar_url , html_url} }) => {
        return (
            <div className='card'>    
                <img src={avatar_url} className='userItem' alt="Profile" />
                <h3>{login}</h3>
                <a href={html_url}>Profile</a>
            </div>
        )
    }

UserItem.propsTypes = {
    user: propsTypes.object.isRequired,
    loading: propsTypes.object.isRequired
}    

export default UserItem
