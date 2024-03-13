import React, { useRef,  } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

export default function Sliderimage() {
  
  return (<>
    <div  className='w-96 mx-60 h-80 rounded-lg  pl-10 backdrop-blur-sm bg-white/30 absolute m-32 z-10'>
  <div className='h-full absolute flex flex-col '>
    <div>
    <article class="text-wrap pt-2 m-4 font-serif	 ">
  <h3 className='font-bold text-3xl'>Nous donnons vie à vos ambitions </h3>
  <p className='pr-20 pt-5 text-xl '> La seule solution de livraison et de stockage qui prend soin de vos colis et de vos clients.      </p>
  </article>

    </div>
    <div>
      <a  className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 text-center focus:ring-primary-300 font-medium rounded-lg text-gl w-60 px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-purple-950 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-primary-800 absolute bottom-5 left-5"><Link to="/creercompte">Get started</Link></a>
    </div>
  </div>
</div>

  
    <div  id='home'className='relative'>
      <Swiper 
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <div className=''>
          <SwiperSlide><img className='w-screen h-screen' src='https://www.toutsurmesfinances.com/bourse/wp-content/uploads/sites/10/2021/06/ipo-colisprive.jpg'/></SwiperSlide>
          <SwiperSlide><img className='w-screen h-screen' src='https://media.licdn.com/dms/image/C4E1BAQGNU05AF_as7g/company-background_10000/0/1633386474275/colis_priv_maroc_cover?e=1710417600&v=beta&t=oIO15xQAAGx8Vq-PvB9UJHxTSSNxAmsIXL3cWZjRW_I'/></SwiperSlide>
          <SwiperSlide><img className='w-screen h-screen' src='https://gomet.net/wp-content/uploads/2021/06/go-photo-camion-colis-prive%CC%81-e1623772779542.jpeg'/></SwiperSlide>
          <SwiperSlide><img className='w-screen h-screen' src='https://www.toutsurmesfinances.com/bourse/wp-content/uploads/sites/10/2021/06/ipo-colisprive.jpg'/></SwiperSlide>
          <SwiperSlide><img className='w-screen h-screen' src='https://www.toutsurmesfinances.com/bourse/wp-content/uploads/sites/10/2021/06/ipo-colisprive.jpg'/></SwiperSlide>
          <SwiperSlide><img className='w-screen h-screen' src='https://www.toutsurmesfinances.com/bourse/wp-content/uploads/sites/10/2021/06/ipo-colisprive.jpg'/></SwiperSlide>
        </div>
      </Swiper>
    </div>
  </>
  
  );
}