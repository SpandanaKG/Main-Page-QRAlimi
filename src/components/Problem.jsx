import React from 'react';
import '../style/Problem.css'; // Assuming you have a CSS file for styling

const Problem = () => {
  return (
    <section className="problem-section" id="problem">
      <div className="container">
        <h2 className="section-title" data-aos="fade-right">차량 앞유리 메모의 문제점</h2>
        <p className="problem-intro">
          차량 앞유리에 전화번호를 남기는 것은 편리해 보일 수 있지만, 심각한 위험이 따를 수 있습니다.
        </p>
        <div className="problems-list" data-aos="fade-up">
          <div className="problem-card">
            <span className="icon">📞</span>
            <p>전화번호는 모든 사람에게 공개되어 있습니다.</p>
          </div>
          <div className="problem-card">
            <span className="icon">⚠️</span>
            <p> 누구나 해당 번호를 사기나 스팸에 악용할 수 있습니다.</p>
          </div>
          <div className="problem-card">
            <span className="icon">🕵️</span>
            <p> 이는 귀하의 신원과 안전을 위험에 처하게 합니다.</p>
          </div>
        </div>
        <p className="problem-conclusion" data-aos="fade-left">
          QR 알리미는 운전자와 그들의 정보를 보호하기 위해 사적이고, 안전하며, 스마트한 대안을 제공함으로써 이 문제를 해결합니다.
        </p>
      </div>
    </section>
  );
};

export default Problem;
