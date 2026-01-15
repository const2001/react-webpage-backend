import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import NavigationBar from './components/navbar'; 
import HomePage from './homepage'; 
import ContactUs from './components/contactUs'; 
import AboutUs from './AboutUs'; 
import Gas from './Gas'; 
import LoginPage from './LoginPage'; 

const App = () => {
  return (
    <Router> 
      <NavigationBar /> 
      <Routes> 
        <Route path="/" element={<HomePage />} /> 
        <Route path="/about" element={<AboutUs/>} /> 
        <Route path="/gas" element={<Gas/>} /> 
        <Route path="/contact" element={<ContactUs/>} /> 
        <Route path="/LoginPage" element={<LoginPage/>} /> 
      </Routes>
    </Router>
  );
};

export default App;
