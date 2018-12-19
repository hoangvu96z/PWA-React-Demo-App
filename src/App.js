import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Music from './components/Music';
import Image from './components/Image';
import Stopwatch from './components/Stopwatch';
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <br/>
        <Content />
        <br/>
        <Music />
        <br/>
        <Image/>
        <br/>
        <Stopwatch/>
      </div>

    );
  }
}

export default App;