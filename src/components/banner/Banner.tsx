import { FC, useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import BannerSlide from './banner-slide/BannerSlide';
import { bannersData } from './banners.data';

SwiperCore.use([EffectFade]);

const Banner: FC = (): JSX.Element => {
  const nodeRef = useRef(null);
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    setShow(!show);
  }, []);

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={show}
      timeout={3000}
      classNames="main-animation-scale"
      unmountOnExit
    >
      <section ref={nodeRef} className="sm-max:hidden">
        <Swiper
          effect="fade"
          className="bg-black shadow-shadow rounded-[30px] min-h-[200px] border-[1px]"
          modules={[Autoplay, Pagination, Navigation]}
          pagination={{ clickable: true }}
          navigation={true}
          autoplay={{ delay: 1500 }}
          loop={true}
          spaceBetween={50}
          slidesPerView={1}
        >
          {bannersData.map(({ img, alt }) => (
            <SwiperSlide key={alt}>
              <BannerSlide img={img} alt={alt} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </CSSTransition>
  );
};

export default Banner;
