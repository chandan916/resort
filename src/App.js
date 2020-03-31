import React from 'react';
import './App.css';
import Error from './pages/error';
import Home from './pages/home';
import Navbar from './component/navbar';
import Room from './pages/room';
import {Route, Switch} from 'react-router-dom';
import Singleroom from './pages/singleroom';

function App() {
  return (
    <>
      <Navbar/>
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/room' component={Room}/>
      <Route exact path='/room/:roomtype' component={Singleroom}/>
      <Route component={Error}/>
      </Switch>
      {/* switch render the first route that matches the path.route without path always match */}
    </>
  );
}

export default App;

