import React from 'react';
import {BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import Navbar from './component/layout/Navbar';
import About from './component/pages/About';
import Alert  from './component/layout/Alert';
import Profile from './component/users/Item';
import GithubState from './context/github/githubState';
import AlertState from '../src/context/alertContext/alertState';
import './App.css';
import Home from './component/pages/Home';
import NotFount from './component/pages/notFount';
// import { render } from '@testing-library/react';

const App = () => {  

 return (
      <GithubState >
      <AlertState>

      <Router>
      <div>
        <Navbar title='Github Finder' />

      <div className='container'>
       <Alert/>

  <Switch>

   <Route exact path="/" component={Home} />
   <Route exact path="/user/:login" component={Profile} />
   <Route exact path="/about" component={About} />
   <Route component={NotFount} />
   
   </Switch>

</div>
</div>
 </Router>

 </AlertState>
      </GithubState>
 )
  };


export default App;
