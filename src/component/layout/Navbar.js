import React from 'react';
import propTypes from 'prop-types'
// import {  BrowserRouter as Router, Link} from 'react-router-dom';
import { Link } from 'react-router-dom';

const Navbar = props => {

    
        return (
                <nav className='navbar' >
                <h2>
                  <i className={props.icon}></i>
                {props.title}
                </h2>
                <ul>
                  <li> <Link to="/" className='btn'>Home</Link></li>
                    <li><Link to="/about" className='btn' >About</Link></li>
                    </ul>
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