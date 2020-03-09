import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Login from './pages/Login';
import Checkin from './pages/Checkin';


function Routes(){
    return(
      <Switch>
        <Route path="/" exact component={Login}/>      
        <Route path="/checkin" component={Checkin}/>
      </Switch>
    );
  }
  
  export default Routes;