import React, {useReducer} from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import githubReducer from './githubReducer';
import {SEARCH_USERS, GET_USER , GETUSER_REPOS, SET_LOADING ,  USERS_CLEAR} from '../types';

let GithubClientId;
let GithubClientSecret;

if(process.env.NODE_ENV !== 'production') {
    GithubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
    GithubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET
} else {
    GithubClientId = process.env.GITHUB_CLIENT_ID;
    GithubClientSecret = process.env.GITHUB_CLIENT_SECRET

}

const GithubState = props => {
    const initailState = {
        users: [],
        user:{},
        loading:false,
        repos:[],
        alert:null
    }

    const [state , dispatch] = useReducer(githubReducer, initailState);

    //SEARCH_USERS

    const  searchUsers = async (text) => { 
        setLoading();
        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${GithubClientId} & client_secret=${GithubClientSecret}`)
        dispatch({
            type: SEARCH_USERS,
            payload: res.data.items
        })
      }

    // Get User
    const  getUser = async (username) => {
        setLoading(true)
          const res = await axios.get(`https://api.github.com/users/${username}?client_id=${GithubClientId} & client_secret=${GithubClientSecret}`)
          dispatch({
              type: GET_USER,
              payload: res.data
          })
        }
    //Get Repos

    const  getUserRepos = async (username) => {
        setLoading(true)
          const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc?client_id=${GithubClientId} & client_secret=${GithubClientSecret}`)
          dispatch({
              type:GETUSER_REPOS,
              payload: res.data
        })
        }

    //Clear Users

    const usersClear = () => dispatch( {type: USERS_CLEAR} ) 

    //Loading 
  
    const setLoading = () => dispatch({ type:SET_LOADING })  



    return <GithubContext.Provider
     value={{
         user:state.user, 
         users:state.users, 
         loading:state.loading,
         repos:state.repos,
         alert: state.alert,
         usersClear,
         searchUsers,
         getUser,
         getUserRepos
    }}  >
         {props.children}
    </GithubContext.Provider>
}

export default GithubState;