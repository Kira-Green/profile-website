import React, { Component } from 'react';
import Navbar from '../Navbar';

import './App.css';
import Section from '../Section';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar />
      <Section
          title="Section 1"
          
          dark={true}
          id="section1"
        />
        <Section
          title="Section 2"
          
          dark={false}
          id="section2"
        />
        <Section
          title="Section 3"
          
          dark={true}
          id="section3"
        />
        <Section
          title="Section 4"
          
          dark={false}
          id="section4"
        />
        <Section
          title="Section 5"
         
          dark={true}
          id="section5"
        />
      </div>
    );
  }
}

export default App;
