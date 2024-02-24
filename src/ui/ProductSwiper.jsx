import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from './ProductCard';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import SwiperNav from './SwiperNav';

const StyledProductSwiper = styled(Swiper)`
  width: 100%;
  & .swiper-slide {
    max-width: 800px;
  }
  /* & .swiper-slide:nth-child(1n) {
    margin-left: var(--padding-row);
  } */
  & .swiper-pagination-bullet {
    width: 50px;
    height: 1px;
    border-radius: 0;
  }
  & .swiper-pagination-bullets {
    /* bottom: 1rem; */
    z-index: 1;
  }

  & .swiper-pagination-bullet-active {
    background: var(--color-grey-900);
  }
`;

function ProductSwiper({ products }) {
  console.log(products);
  return (
    <StyledProductSwiper
      modules={[Pagination, Navigation]}
      slidesPerView={'auto'}
      centeredSlides={false}
      spaceBetween={16}
      pagination={{
        clickable: true,
      }}
      // navigation={true}
    >
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <ProductCard product={product} />
        </SwiperSlide>
      ))}
      <SwiperNav />
    </StyledProductSwiper>
  );
}

export { ProductSwiper };
