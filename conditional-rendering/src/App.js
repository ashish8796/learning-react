import React, { Component } from 'react';
import './App.css';
import Button from './Button';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="wrapper">
        <Button shape="disabled" disabled>Disabled</Button>
      </div>
    );
  }
}

export default App;
