import React, {Component} from 'react';
import './theme/css/index.css';
import FirstC from './components/FirstC';

class App extends Component {
  render() {
    return (
      <div className="hello-world">
        <FirstC />
      </div>
    );
  }
}

export default App;
