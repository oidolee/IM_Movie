import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import moment from "moment";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import style from  "../../styles/page_1/styles.css";

// import required modules
import { Navigation } from 'swiper/modules';

export default function Reservation_Swiper() {

  const sysdate = moment().format("YYYY-MM-DD");
  const year = moment().format("YYYY");
  const month = moment().format("MM");
  const day = moment().format("D");

  return (
    <div className={`Reservation_Swiper ${style.Reservation_Swiper}`}>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                                                                     
        <SwiperSlide>
          <div>
            <ul>
              <li>
                {day}<br />
                
              </li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
}
