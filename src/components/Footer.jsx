// Footer.jsx
import React from 'react';
import '../style/Footer.css'; // Assuming you have a CSS file for styling
import { FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa';
import naver from '../assets/images/naver.jpg'; 

const Footer = () => {
  return (
    <footer className="footer" data-aos="fade-up">
      <div className="footer-section about">
        <h4>회사소개</h4>
        <ul>
          <li><a href="https://shiftapp.net/QR/term/qr_term-1.html">이용약관</a></li>
          <li><a href="https://shiftapp.net/QR/term/qr_term-2.html">개인정보처리방침</a></li>
        </ul>
        <p>
            (주)제제컴즈<br/> 대표자: 김준강<br />
            사업자등록번호: 641-88-00828<br />
            통신판매업신고: 제2021-성남수정-1335호<br />
            13449 경기 성남시 수정구 달래내로 46 <br />,성남글로벌융합센터 A동 405호.<br />
            T.070-4252-5571 E.jejecomms@gmail.com <br />
            F.0504-486-5575
        </p>
      </div>

      <div className="footer-section community">
        <h4> 우리 커뮤니티에 참여하세요</h4>
        <div className="social-icons">
          <a href="https://blog.naver.com/jejecomms" title="Naver Blog"><img src={naver} alt="Naver" /></a>
          <a href="https://www.instagram.com/jejecomms_jjang/" title="Instagram"><FaInstagram /></a>
          <a href="https://www.facebook.com/JeJeComms" title="Facebook"><FaFacebookF /></a>
          <a href="https://www.youtube.com/@jejecommsshift3318" title="YouTube"><FaYoutube /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
