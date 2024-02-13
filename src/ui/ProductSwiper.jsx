import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from './ProductCard';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import SwiperNav from './SwiperNav';

const StyledProductSwiper = styled(Swiper)`
  grid-column: 1 / span 4;
  grid-row: 3 / span 1;
  width: 100%;
  background-color: none;
  & .swiper-pagination-bullet {
    width: 50px;
    height: 1px;
    border-radius: 0;
  }
  & .swiper-pagination-bullets {
    bottom: 1rem;
    z-index: 1;
  }

  & .swiper-pagination-bullet-active {
    background: var(--color-grey-900);
  }
`;

function ProductSwiper({ productData }) {
  return (
    <StyledProductSwiper
      modules={[Pagination, Navigation]}
      pagination={true}
      // navigation={true}
    >
      {productData.map((product) => (
        <SwiperSlide key={product.image}>
          <ProductCard
            name={product.name}
            headline={product.headline}
            price={product.price}
            link={product.link}
            image={product.image}
          />
        </SwiperSlide>
      ))}
      <SwiperNav />
    </StyledProductSwiper>
  );
}

export { ProductSwiper };
