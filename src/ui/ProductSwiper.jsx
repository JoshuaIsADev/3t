import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from './ProductCard';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import SwiperNav from './SwiperNav';

const StyledProductSwiper = styled(Swiper)`
  width: 100%;
  padding-top: 4rem;

  & .swiper-slide {
    max-width: 800px;
    padding: 0 2rem;
  }
  & .swiper-pagination-bullet {
    width: 50px;
    height: 2px;
    border-radius: 0;
  }
  & .swiper-pagination-bullets {
    display: flex;
    justify-content: right;
    width: 100%;
    padding: 0 var(--padding-sides);
    top: 0.7rem;
    z-index: -10;
  }

  & .swiper-pagination-bullet-active {
    background: var(--color-grey-900);
  }
`;

function ProductSwiper({ products }) {
  return (
    <StyledProductSwiper
      modules={[Pagination, Navigation, Keyboard]}
      slidesPerView={'auto'}
      centeredSlides={false}
      spaceBetween={0}
      pagination={true}
      keyboard={true}
    >
      <SwiperNav />
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <ProductCard product={product} />
        </SwiperSlide>
      ))}
    </StyledProductSwiper>
  );
}

export { ProductSwiper };
