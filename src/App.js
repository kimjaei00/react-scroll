import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom'
function App() {
  return (
    <Router>
     <Home />
    </Router>
  );
}

export default App;
