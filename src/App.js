import React,{Component} from 'react';
import Navbar from './component/layout/Navbar';
import Users from './component/users/User';
import './App.css';
import axios from 'axios';
import Search from './component/users/search';

class App extends Component{

  state = {
    users : [],
    loading : false
  }


async componentDidMount() {
  this.setState( {loading: true} )
  const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID} & client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
  this.setState( {loading:false , users:res.data} )
  console.log(res.data.items)
  }

  searchUsers = async (text) => {
    this.setState( {loading: true} )
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID} & client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    this.setState( {  users: res.data.items, loading:false} )
  }
 
  render() {

    return (
     <div>
        <Navbar title='Github Finder' />
        
        <div className='container'>
          <Search searchUsers={this.searchUsers} />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
     </div>
    );
  }
}

export default App;
