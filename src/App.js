import React,{Component} from 'react';
import Navbar from './component/layout/Navbar';
import Users from './component/users/User';
import './App.css';
import axios from 'axios';

class App extends Component{

  state = {
    users : [],
    loading : false
  }


async componentDidMount() {
  this.setState( {loading: true} )
  const res = await axios.get('https://api.github.com/users')
  this.setState( {loading:false , users:res.data} )
  }
 
  render() {
    console.log(this.state.users)
    return (
     <div>
        <Navbar title='Github Finder' />
        
        <div className='container'>
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
     </div>
    );
  }
}

export default App;
