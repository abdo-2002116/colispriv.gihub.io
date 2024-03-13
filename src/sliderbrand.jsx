import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// Import required modules

import { Autoplay , Pagination, FreeMode} from 'swiper/modules';

export default function Sliderbrand() {
  const list = [
    'CP_clients_logo_11-e1607682574289.png',
    'Cewe-e1605191157437.png',
    'CP_clients_logo_15-e1607682661290.png',
    'CP_clients_logo_16-e1607682677600.png',
    'hhokvgvi.png',
    'LOGO-DEF-RVB-NOIR-Motoblouz-e1611051857680.png',
    'Photobox-e1605191232725.png',
    'Private-Sport-Shop-e1605191248814.png',
  ];

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
     
        modules={[FreeMode, Pagination, Autoplay]} // Include Autoplay module
        autoplay={{ delay: 2000 }} // Set autoplay delay in milliseconds
        className="mySwiper p-20 "
      >
        {list.map((e) => (
          <SwiperSlide>
            <img src={require(`./colisprive/image/brand/${e}`)} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
