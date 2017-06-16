import React, {Component} from 'react';
import './theme/css/index.css';

class App extends Component {
  render() {
    return (
      <div className="hello-world">
        <p>Hello world!</p>
        <img src="/images/image_1.png"/>
        <div className="image-div"></div>
      </div>
    );
  }
}

export default App;
