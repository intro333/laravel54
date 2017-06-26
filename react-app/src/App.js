import React, {Component} from 'react';
import './theme/css/index.css';
import FirstC from './components/FirstC';
import Roster from './components/Roster';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

class App extends Component {
  render() {
    return (
      <Router history={createHistory}>
        <Switch>
          <Route exact path='/' component={FirstC}/>
          <Route path='/roster' component={Roster}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
