import React, { Component } from 'react';
import './App.css';
import { Quote } from './index.js';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

        <h1>Random Quote Machine</h1>
        <h2>A FreeCodeCamp Frontend Libraries Project</h2>
        <p>Created by Erin Moir</p>
          
        </header>
        
        <Quote />
      </div>
    );
  }
}