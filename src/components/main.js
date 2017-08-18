import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import Details from './details';
import Analytics from './Analytics';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/analytics/:name' component={Analytics}/>
      <Route path='/analytics' component={Analytics}/>      
      <Route path='/:name' component={Details}/>       
    </Switch>
  </main>
)

export default Main