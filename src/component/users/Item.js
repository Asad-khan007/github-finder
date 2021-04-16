import React, { useEffect, Fragment, useContext } from 'react'
import { Spiner } from '../layout/spiner';
import { Link } from 'react-router-dom';
import Repos from '../repos/Repos';
import GithubContext from '../../context/github/githubContext';

const Profile = ({match}) => {

    const githubContext = useContext(GithubContext);
    
    const {getUser,loading,getUserRepos,repos} = githubContext;

    const  {name, company , avatar_url , html_url,location,bio,blog,login,followers, following, public_repos, public_gists, hireable} = githubContext.user

    useEffect( () => {
        getUser(match.params.login)
        getUserRepos(match.params.login);
        // eslint-disable-next-line
    }, [] );
    

      if(loading) return  <Spiner />
      
      return (
          <Fragment>
                <Link to='/' className='btn-light'>Back to Home</Link>

                Hireable: {hireable ? <i class="fas fa-check"></i> : <i class="fas fa-times"></i>}
                <div className='grid'>
                  <div className='center'>
                      <img src={avatar_url} alt="Profile" className='round-image' />
                      <h1> {name} </h1>
                      {location && (
                      <h5>Location: {location}</h5>
                      )}
                  </div>
                  <div className='content'>
                      {bio && (
                          <Fragment>
                              <h3>Bio</h3>
                              <p>{bio}</p>
                          </Fragment>
                      )}
                      <a href={html_url} className='profile-img' target='_blank' rel="noreferrer" >Github Profile</a>
                      <ul>
                          <li>
                              {login && (
                                  <Fragment>
                                      Username : {login}
                                  </Fragment>
                              )}
                          </li>
                          <li>
                              {company && (
                                  <Fragment>
                                      Company: {company}
                                  </Fragment>
                              )}
                          </li>
                          <li>
                              {blog && (
                                  <Fragment>
                                      Website : {blog}
                                  </Fragment>
                              )}
                          </li>
                      </ul>
                  </div>
                </div>
                <div className='text-center'>
                   <div style={{backgroundColor:'green'}}> Followers:{followers} </div>
                   <div style={{backgroundColor:'red'}}> Following:{following} </div>
                   <div style={{backgroundColor:'blue'}}> Public Repos:{public_repos} </div>
                   <div style={{backgroundColor:'lightred'}}> Public Gists:{public_gists} </div>
                </div>
                <Repos repos={repos} />
            </Fragment>
        );
    }; 
    
    export default Profile
