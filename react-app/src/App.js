import React, {Component} from 'react';
import './theme/css/index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Home from './components/Home';
import Categories from './components/Categories/Categories';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import SussessPage from './components/Cart/SuccessPage';
import PersonalAccount from './components/PersonalAccount/PersonalAccount';
import Orders from './components/Orders/Orders';

class App extends Component {
  render() {
    return (
      <Router history={createHistory}>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/categories' component={Categories}/>
          <Route path='/products' component={Products}/>
          <Route path='/cart' component={Cart}/>
          <Route path='/sussess-page' component={SussessPage}/>
          <Route path='/personal-account' component={PersonalAccount}/>
          <Route path='/orders' component={Orders}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
