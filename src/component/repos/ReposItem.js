import React from 'react';
import PropTypes from 'prop-types';
// import Repos from './Repos';

const ReposItem = ({repo}) => {
    return (
        <div className='dadeo'>
           <h3><a href={repo.html_url} target='_blank' rel="noreferrer"> {repo.name} </a></h3>
        </div>
    )
}

ReposItem.propTypes = {
  repo: PropTypes.object.isRequired,
}

export default ReposItem;