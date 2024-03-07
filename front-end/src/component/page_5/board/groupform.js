import React, { useState } from 'react';
import style from '../../../styles/page_5/groupform.css';

const GroupReservationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    event: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기서 폼 데이터를 처리하거나 서버로 전송할 수 있습니다.
    console.log(formData);
  };

  return (
    <div id='wrappage2' className={`wrappage ${style.wrappage2}`}>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">이름</label>
        <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="이름을 입력하세요" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">이메일 주소</label>
        <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="이메일을 입력하세요" required />
      </div>
      <div className="form-group">
        <label htmlFor="phone">전화번호</label>
        <input type="tel" className="form-control" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="전화번호를 입력하세요" required />
      </div>
      <div className="form-group">
        <label htmlFor="company">회사명</label>
        <input type="text" className="form-control" id="company" name="company" value={formData.company} onChange={handleChange} placeholder="회사명을 입력하세요" />
      </div>
      <div className="form-group">
        <label htmlFor="event">이벤트 종류</label>
        <select className="form-control" id="event" name="event" value={formData.event} onChange={handleChange}>
          <option>이벤트 종류를 선택하세요</option>
          <option>단체 관람</option>
          <option>대관 문의</option>
          <option>기타</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="message">문의 내용</label>
        <textarea className="form-control" id="message" name="message" value={formData.message} onChange={handleChange} rows="3" placeholder="문의 내용을 입력하세요" required></textarea>
      </div>
      <button type="submit" className="btn btn-primary">문의하기</button>
    </form>
    </div>
  );
};

export default GroupReservationForm;
