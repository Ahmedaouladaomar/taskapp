import React, { useEffect, useState } from 'react';
import './Footer.css';



function Footer(){
  
  return <div className='footer'>
                  <div className='services'>
                      <span style={ {fontSize: 25, marginBottom: '20px', fontWeight: 'bold'} }>Services</span>
                      <span>Development</span>
                      <span>UI/UX design</span>
                      <span>Hosting</span>
                  </div>
                  <div className='about'>
                      <span style={ {fontSize: 25, marginBottom: '20px', fontWeight: 'bold'} }>About</span>
                      <span>Company</span>
                      <span>Team</span>
                      <span>Careers</span>
                  </div>
          </div>        
      }



export default Footer;