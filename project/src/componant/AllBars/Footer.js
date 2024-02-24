// Footer.js
import React, { Fragment } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
  return (
    <footer style={{ ...footerStyle, ...glassStyle }}>
    <Fragment> 
    <div style={linksContainer}>
          <div style={sectionStyle} className="hoverable-section">
          <p>Sections</p>

          <div style={verticalLinksContainer}>
            <a href="/" style={linkStyle}>
              Home
            </a>
            <a href="/login" style={linkStyle}>
              Login
            </a>
            <a href="/register" style={linkStyle}>
              Sign UP
            </a>
            <a href="/doctors" style={linkStyle}>
              Doctors
            </a>
          </div>
        </div>
        <div style={sectionStyle} className="hoverable-section">
          <p>Support & Help</p>
          <div style={verticalLinksContainer}>
            <a href="/support" style={linkStyle}>
              Support
            </a>
            <a href="/pricing" style={linkStyle}>
              Pricing
            </a>
            <a href="/documentation" style={linkStyle}>
              Documentation
            </a>
            <a href="/guides" style={linkStyle}>
              Guides
            </a>

          </div>
        </div>
        <div style={sectionStyle} className="hoverable-section">
          <p>About Us</p>
          <div style={verticalLinksContainer}>
            <a href="/about" style={linkStyle}>
              About
            </a>
            <a href="/blog" style={linkStyle}>
              Blog
            </a>
            <a href="/jobs" style={linkStyle}>
              Jobs
            </a>
            <a href="/partners" style={linkStyle}>
              Partners
            </a>
          </div>
        </div>
        <div style={sectionStyle} className="hoverable-section">
          <p>Legal</p>
          <div style={verticalLinksContainer}>
            <a href="/legal" style={linkStyle}>
              Legal
            </a>
            <a href="/privacy" style={linkStyle}>
              Privacy
            </a>
            <a href="/terms-company" style={linkStyle}>
              Terms
            </a>
          </div>
        </div>
      </div>
      <div style={linksContainer0}>
      <FontAwesomeIcon icon={faEnvelope}  size="lg" style={{color:"gray",paddingRight:"4px"}} /><h3 style={{color:"white",paddingRight:"2%"}}>MSBSU@icloud.com</h3>
      <FontAwesomeIcon icon={faLinkedin}  size="lg" style={{color:"darkblue",paddingRight:"4px"}}/><h3 style={{color:"white",paddingRight:"2%"}}>team.ln</h3>
      <FontAwesomeIcon icon={faPhone}  size="lg" style={{color:"white",paddingRight:"4px"}}/><h3 style={{color:"white",paddingRight:"2%"}}>+20-3-321-2002</h3>
      </div>
      <div style={copyrightStyle}>
        <p style={subtleColor}>© 2024 All rights reserved</p>
      </div>
      </Fragment>
    </footer>
  
  );
};



const glassStyle = {
  boxShadow: '0 0 10px lightgray',
  borderRadius: '2px', // Optional for a curved glass effect
  marginTop: '50px',
};

const footerStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0.9',
  color: 'red',
  padding: '20px',
  textAlign: 'center',
  width: '100%',
  fontWeight: 'bolder',
};

const linksContainer = {
  display: 'flex',
  flexDirection: 'row', // Align horizontally
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  marginTop: '10px',

};

const linksContainer0 = {
  display: 'flex',
  flexDirection: 'row', // Align horizontally
  flexWrap: 'wrap',
  color: 'white',
};

const sectionStyle = {
  margin: '10px',
  transition: 'color 0.3s ease', // Smooth color transition on hover
};

const verticalLinksContainer = {
  display: 'flex',
  flexDirection: 'column', // Align vertically
  alignItems: 'center',
};

const linkStyle = {
  color: 'white',
  margin: '5px',
  textDecoration: 'none',
};



const copyrightStyle = {
  marginTop: '20px',
};

const subtleColor = {
  color: '#888',
};

export default Footer;
