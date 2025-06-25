import React, { useState, useEffect } from 'react';
import '../style/Hero.css'; // Assuming you have a CSS file for styling
import { FaShieldAlt } from 'react-icons/fa';
import image from '../assets/images/intro_car.png'; // Assuming you have an image for the hero section
const Hero = () => {
  const fullText = 'QR 알리미';
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timer = setTimeout(() => {
        setText(fullText.slice(0, index + 1));
        setIndex(index + 1);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [index]);

  return (
    <section className="hero-section">
      <div className="hero-left">
        <h1 className="typed-heading">
          {text}
        </h1>
        <p className="hero-subtitle" data-aos="fade-right">
         귀하의 차량이 안전하게 소통하도록 <span>하십시오</span>
        </p>
        <p className="hero-description" data-aos="fade-right">
          휴대전화 번호를 노출하지 마십시오. QR코드를 사용하여 신원을 보호하고, 안전한 메시지 전송을 가능하게 하며, 사기를 예방하세요.
        </p>
        <button href="#problem" className="cta-btn" data-aos="fade-right" onClick={() => {
          const ctaElement = document.getElementById('problem');
            if (ctaElement) {
              ctaElement.scrollIntoView({ behavior: 'smooth' });
            }
          }}>
          <FaShieldAlt className="btn-icon" /> Get Started Securely
        </button>
      </div>
      <div className="hero-right" data-aos="fade-left">
        <div className="blob blob-yellow"></div>
        <div className="blob blob-blue"></div>
        <img src={image} alt="QR Example" />
      </div>
    </section>
  );
};

export default Hero;
