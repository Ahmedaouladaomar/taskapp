import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";


function Navbar(){

  return    <div className='navbar-container'>
               <div className="navbar">
                   <Link to="/" className="hover-underline-animation">Home</Link>
                   <Link to="/About" className="hover-underline-animation">About</Link>
                   <Link to="/Contact" className="hover-underline-animation">Contact us</Link>
               </div>
            </div>
      }



export default Navbar;