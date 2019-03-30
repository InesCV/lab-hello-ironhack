import React, { Component } from 'react';
import Navbar from './components/Navbar';
import FeatureCards from './components/FeatureCards';

import logo from './logo.svg';
import './App.css';



const Box = (props) => {
  return (
    <h1>{props.title}</h1>
  )
}

class App extends Component {
  render() {
    return (
      <>
        <header className="jumbotron">
          <div>
            <Navbar />
            <h1> Say Hello to ReactJS</h1>
            <h2>You will learn a Frontend framework form scratch, to become a Ninka Developer</h2>
            <button>Awsome!</button>
          </div>
        </header>
        <div className="display">
          <FeatureCards img="/images/icon1.png" title='Declarative' description="React makes it painless to create interactive UIs"/>
          <FeatureCards img="/images/icon2.png" title='Declarative' description="React makes it painless to create interactive UIs"/>
          <FeatureCards img="/images/icon3.png" title='Declarative' description="React makes it painless to create interactive UIs"/>
          <FeatureCards img="/images/icon4.png" title='Declarative' description="React makes it painless to create interactive UIs"/>
        </div>
      </>
    );
  }
}

export default App;
