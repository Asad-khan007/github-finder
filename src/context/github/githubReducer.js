import {SEARCH_USERS, GET_USER , GETUSER_REPOS, SET_LOADING ,  USERS_CLEAR} from '../types';

export default (state, action) => {
      switch(action.type) {
          case SEARCH_USERS: 
            return {
                ...state,
                users: action.payload,
                loading:false
            }
          case SET_LOADING: 
            return {
                ...state,
                loading:true
            }
          case GET_USER:
            return {
              ...state,
              user: action.payload,
              loading:false
            }  
          case USERS_CLEAR:
            return {
              ...state,
              users: [],
              loading: false
            }
          case GETUSER_REPOS:
            return {
              ...state,
              repos: action.payload,
              loading:false
            }
          default:
              return state;
      }
};