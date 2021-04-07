import React,{Component, Fragment} from 'react';
import Navbar from './component/layout/Navbar';
import Users from './component/users/User';
import {BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Search from './component/users/search';
import About from './component/pages/About';
import Alert  from './component/layout/Alert';
import Profile from './component/users/Item';
// import { render } from '@testing-library/react';

class App extends Component {

  state = {
    users : [],
    loading : false,
    user:{},
    alert: null
  }


  searchUsers = async (text) => { 
    this.setState( {loading: true} )
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID} & client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    this.setState( {  users: res.data.items, loading:false} )
  }

  getUser = async (username) => {
    this.setState( {loading: true} )
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID} & client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    this.setState( {  user: res.data, loading:false} )
  }
  
  
  usersClear = () => this.setState({users:[]});
  
  showAlert = (msg , type) => {
    this.setState({alert: {msg , type}})
    setTimeout( () => this.setState({alert:null}),5000 )
  }
  
  
  
  render() {
    
    const {users , loading , user} = this.state;
    
    return (
      <Router>
      <div>
        <Navbar title='Github Finder' />

      <div className='container'>
       <Alert alert={this.state.alert} />

  <Switch>
     <Route exact path="/" render={() => 
     <Fragment>
          <Search 
                searchUsers={this.searchUsers} 
                usersClear={this.usersClear}
                showBtn={users.length > 0 ? true : false }
                showAlert={this.showAlert}/>
     <Users loading={loading} users={users}/>
     </Fragment>
      } />

      <Route exact path='/search' />

   <Route exact path="/about" component={About} />
   <Route exact path="/user/:login" render={ props => (
     <Profile  {...props} getUser={this.getUser} user={user} loading={loading} />
   )} />
   </Switch>
</div>
</div>
 </Router>
    )
    
  }
  
}


export default App;
