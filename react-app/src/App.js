import React, {Component} from 'react';
import './theme/css/index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Home from './components/Home';
import Categories from './components/Categories/Categories';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';

class App extends Component {
  render() {
    return (
      <Router history={createHistory}>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/categories' component={Categories}/>
          <Route path='/products' component={Products}/>
          <Route path='/cart' component={Cart}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
