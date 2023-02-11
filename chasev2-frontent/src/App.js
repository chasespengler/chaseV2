import './App.css';
import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/Home';
import NavBar from './components/NavBar';
import {useLocation} from 'react-router-dom';

export function Checky() {
  const {pathname} = useLocation();
  var toShow = true;
  useEffect(() => {
    if (pathname.includes('/login')) {
        console.log('1');
    } else {
        console.log('2');
    };
  });
}

function App() {
  /* navbar toggle logic */
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Router>
      <NavBar toggle={toggle}/>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/login" element={<LoginPage />} />
      </Routes>

    </Router>
  );
}

export default App;
