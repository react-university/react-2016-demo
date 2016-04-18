import React                           from 'react';
import {Router, Route, browserHistory} from 'react-router';
import Home                            from '../components/home';
import Game                            from '../components/game';

export default <Router history={browserHistory}>
  <Route path="/" component={Home} />
  <Route path="/star-trek" component={Game}/>
</Router>
