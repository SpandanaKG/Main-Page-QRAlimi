import React from 'react';
import '../style/CTA.css'; // Assuming you have a CSS file for styling
import googleQR from '../assets/images/QR_Google.png';
import appleQR from '../assets/images/QR_App.png';
import guideIcon from '../assets/images/QR_introduction.png';

const CTA = () => {
  return (
    <section className="cta-section-dark">
      <h2 className="cta-title">Get QR Alimi Now</h2>
      <p className="cta-subtitle">
        Android와 iOS에서 이용하실 수 있습니다. 시작하려면 사용자 가이드를 확인하세요.
      </p>

      <div className="cta-card-container" id='cta'>
        <div className="cta-card" data-aos="fade-right">
          <a href="https://play.google.com/store/apps/details?id=com.example.qralimi" target='_blank' rel="noopener noreferrer"> 
            <img src={googleQR} alt="Google Play QR" className="qr-img" loading='lazy' />
          </a>
          <p> 지금 받기 <strong>Google Play</strong></p>
        </div>
        <div className="cta-card" data-aos="fade-up">
          <a href="https://apps.apple.com/kr/app/qralimy/id1628992038" target='_blank' rel="noopener noreferrer">
            <img src={appleQR} alt="App Store QR" className="qr-img" loading='lazy' />
          </a>
          <p>다운로드하기 <strong>App Store</strong></p>
        </div>
        <div className="cta-card" data-aos="fade-left">
          <a href="/downloads/introduction_2025.pdf" target="_blank" rel="noopener noreferrer">
            <img src={guideIcon} alt="Download PDF" className="qr-img" loading='lazy'/>
          </a>
          <p>다운로드하기 <strong>QR알리미 소개서</strong></p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
