import React, { Component } from 'react';
import './reset.css';
import './App.css';
import './components/Nav/Nav.css'
import './components/Input/Input.js'
import Input from './components/Input/Input.js'
import Nav from './components/Nav/Nav.js'


class App extends Component {

  render() {
    return (
      <div className="App">
        <Nav />
        <Input />
      </div>
    );
  }
}

export default App;
