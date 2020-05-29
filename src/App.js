import React from 'react';
import './App.css';

import Navbar from './components/Navbar'
import Analytics from './components/Analytics'
import Links from './components/Links'
import Vertical from './components/Vertical'
import Graphs from './components/Graphs'
import Signups from './components/Signups'

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Analytics />
        <Links />
        <Vertical />
        <Graphs />
        <Signups />
      </div>
    </div>
  );
}

export default App;
