import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../style/Testimonials.css'; // Assuming you have a CSS file for styling

const testimonials = [
  {
    name: '이사랑',
    text: "QR 알리미 덕분에 스팸 전화를 피할 수 있었습니다. 이제는 차량 앞유리에 전화번호를 남기지 않습니다.",
    role: '현대차 소유자, 서울',
    img: 'https://ui-avatars.com/api/?name=Lee+Sarang'
  },
  {
    name: '김민지',
    text: "개인적이고 빠르며, 미래를 느끼게 합니다. 훌륭한 콘셉트입니다!",
    role: ' 테슬라 운전자,서울',
    img: 'https://ui-avatars.com/api/?name=+Kim+Minji'
  },
  {
    name: '민다니엘',
    text: " 저희는 전 차량에 QR 알리미를 사용하고 있습니다. 안전하고 스마트하며, 고객들은 개인정보 보호에 매우 만족합니다..",
    role: '택시 차량 운행업체 대표,서울',
    img: 'https://ui-avatars.com/api/?name=Min+Daniel'
  },
  {
    name: '한수',
    text: "장난 전화가 걱정되었습니다. QR 알리미 덕분에 마음이 편해졌습니다!",
    role: '배달 밴 운전사, 인천',
    img: 'https://ui-avatars.com/api/?name=Han+Soo'
  },
  {
    name: '박지우',
    text: "정말 현대적입니다. 이제 운전자들은 차량 앞유리에 전화번호를 남기는 일을 그만두어야 합니다!",
    role: '부산, 기아 셀토스 소유자',
    img: 'https://ui-avatars.com/api/?name=Park+Jiwoo'
  },
  {
    name: '최하나',
    text: "빠르고, 사적이며, 안전합니다. QR 알리미는 선택의 여지가 없습니다!",
    role: '기아 드라이버, 대전',
    img: 'https://ui-avatars.com/api/?name=Choi+Hana'
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section" id="testimonials">
      <h2>QR 알리미에 대한 운전자의 의견</h2>
      <p>개인정보 보호와 안전을 중요시하는 사용자들의 실제 피드백입니다.</p>

      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
        className="testimonial-swiper"
      >
        {testimonials.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="testimonial-card">
              <img src={item.img} alt={item.name} className="avatar" />
              <h4>{item.name}</h4>
              <p><em>"{item.text}"</em></p>
              <p><strong>{item.name.split(' ')[0]}</strong>, {item.role}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
