import React, { Component, Fragment } from 'react'
import { Spiner } from '../layout/spiner';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Profile extends Component {

componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }


  static propTypes = {
      getUser: PropTypes.func.isRequired, 
      loading: PropTypes.bool.isRequired,
      user: PropTypes.object.isRequired,
  }

    render() {
 
    const {name, company , avatar_url , html_url,bio,blog,login,followers, following, public_repos, public_gists, hireable} = this.props.user
    const {loading} = this.props.loading;


    if(loading) return  <Spiner />
    
        return (
            <Fragment>
                <Link to='/' className='btn-light'>Back to Home</Link>
                
            </Fragment>
        )
    }
}


export default Profile
