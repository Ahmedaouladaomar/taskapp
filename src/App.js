import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import About from './pages/About/About'
import Tasks from './pages/Tasks/Tasks'
import Navbar from './elements/Navbar/Navbar';
import Footer from './elements/Footer/Footer';


function App(){

  return <div className='main'>
                <Router>
                    <Navbar/>
                      <Routes>
                          <Route path="/" element={<Home/>} />
                          <Route exact path="/Tasks/:id" element={<Tasks/>} />
                          <Route path="/Contact" element={<Contact/>} />
                          <Route path="/About" element={<About/>}/>
                      </Routes>
                     <Footer/>  
                </Router>
          </div>        
      }



export default App;