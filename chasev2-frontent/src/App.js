import logo from './logo.svg';
import './App.css';
import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import React from 'react'
import LoginPage from './pages/LoginPage'

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route exact path="/" element={<Home />} /> */}
        <Route exact path="/login" element={<LoginPage />} />
      </Routes>

    </Router>
  );
}

export default App;
