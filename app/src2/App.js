import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './title';
import Header from './components/header';
import Login from './components/login';
import './externels/css/uikit.css' ;




class App extends Component {

  componentWillMount() {

    console.log (' i ll be mounting ')

  }
  componentDidMount() {
     
    console.log (' i ll be mounting ')
  }

  render() {

    console.log (" its rendering ")
    return (
      <div className="App">
        <Header/>
        <Login/>
      </div>
    );
  }
}

export default App;
