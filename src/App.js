import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssVarsProvider } from '@mui/joy/styles';
import LoginFinal from './components/loginpage';
import Signup from './components/signup'; // Import Signup component
import Home from './components/Home';
import Details from './details';
// import Component from './homepage';

export default function app() {
  return (
    <Router>
      <CssVarsProvider>
        <Routes>
          <Route exact path="/" element={<LoginFinal />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </CssVarsProvider>
    </Router>

    
  );
}
