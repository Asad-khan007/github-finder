import React from 'react';
import propTypes from 'prop-types'

const Navbar = (props) => {
        return (
            <nav className='navbar' >
                <h2>
                  <i className={props.icon}></i>
                {props.title}
                </h2>
            </nav>
        )
    }

    Navbar.defaultProps = {
        title: ' Github Finder',
        icon: 'fab fa-github'
    }

    Navbar.propTypes = {
        title: propTypes.string.isRequired,
        icon: propTypes.string.isRequired
    }

export default Navbar