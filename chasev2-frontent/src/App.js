import './App.css';
import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/Home';
import BlogPage from './pages/Blog'
import NavBar from './components/NavBar';
import {useLocation} from 'react-router-dom';
import Foot from './components/Footer';

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

  const [isScroll, setIsScroll] = useState(true)

  const toggleNavButtonsType = (setType) => {
    setIsScroll(setType);
  }

  return (
    <Router>
      <NavBar toggle={toggle} isScroll={isScroll} toggleNavButtonsType={toggleNavButtonsType}/>
      <Routes>
        <Route exact path="/" element={<HomePage toggleNavButtonsType={toggleNavButtonsType}/>} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/blog" element={<BlogPage />} />
      </Routes>
      <Foot ></Foot>
    </Router>
  );
}

export default App;
