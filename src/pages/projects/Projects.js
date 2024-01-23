import {useEffect, useRef} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import "./Projects.css";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

export default function Projects({ menu }) {
  const ref = useRef(null);

  useEffect(() => {
    if (menu === "projects") {
      ref.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [menu]);

  return (
    <>
      <style jsx="true">{`
        .swiper {
        width: 100%;
        padding-top: 50px;
        padding-bottom: 50px;
      }

        .swiper-slide {
        background-position: center;
        background-size: cover;
        width: 300px;
        height: 300px;
      }

        .swiper-slide img {
        display: block;
        width: 100%;
      } 
      `}
      </style>
      <div className="section-projects" ref={ref}>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Autoplay]}
          className="mySwiper">
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}
