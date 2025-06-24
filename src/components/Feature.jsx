import React, { useEffect, useRef } from 'react';
import '../style/Feature.css'; // Assuming you have a CSS file for styling 

const Features = () => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const video = videoRef.current;
        if (!video) return;

        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      {
        threshold: 0.5, // Play when 50% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="features-section" id="features" ref={sectionRef}>
      <div className="features-container">
        <div className="features-text" data-aos="fade-right">
          <h2 className="section-title">How QR Alimi Works</h2>
          <p className="section-subtitle">
            QR 알리미는 연락처 정보를 보호하고 운전자 간의 안전한 소통을 간편하게 만들어 줍니다.
          </p>
          <ul className="feature-list">
            <li>🔒 귀하의 전화번호를 비공개로 안전하게 보호합니다.</li>
            <li>📲 차량에 부착된 손쉽게 스캔 가능한 QR코드</li>
            <li>🚘 개인 정보를 노출하지 않고 익명 메시지를 보낼 수 있습니다.</li>
            <li>⚡ 즉시 작동하며, 스캔하는 사람은 앱이 필요하지 않습니다.</li>
          </ul>
        </div>

        <div className="features-video">
          <video
            ref={videoRef}
            className="feature-video"
            preload="auto"
            playsInline
            loop
            src="/videos/Feature.mp4"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
