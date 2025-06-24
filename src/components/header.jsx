import React from 'react';
import '../style/Header.css'; 
import logo from '../assets/images/3Dicon.png'; // Assuming you have a logo image

const Header = () => {
  return (
    <header className="custom-header">
      <div className="container">
        <img src={logo} alt="QR Alimi Logo" className="logo-img" />
        <nav className="nav-links">
          <a href="/index.html">QR알리미란?</a>
          <a href="/QR/QRUserGuide/index.html">QR알리미 사용하기</a>
          <a href="/QR/FAQ/index.html">고객센터</a>
          <a href="/QR/B2B/index.html">B2B</a>
        </nav>
      </div>
    </header>
  );
};


export default Header;
