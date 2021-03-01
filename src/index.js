import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter  as Router, Route } from 'react-router-dom';
import Content from './Component/Content';
import Login from './Login';


ReactDOM.render(
  <Router basename='/internal-wecare'>
      <Route path='/' exact component={Login} />
      {/* <Route path='/home' exact component={Content} /> */}
  </Router>,   
  document.getElementById('root')
);