import styled from 'styled-components';
import { Swiper, useSwiper } from 'swiper/react';

const ButtonLeft = styled.button`
  background-image: url('../../public/left.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: var(--color-grey-0);
  width: 50px;
  height: 20px;
  border: none;
  cursor: pointer;
`;

const ButtonRight = styled.button`
  background-image: url('../../public/right.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: var(--color-grey-0);
  width: 50px;
  height: 20px;
  border: none;
  cursor: pointer;
`;

const StyledSwiperNav = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  z-index: 2;
  width: 100%;
  /* height: 200px; */
`;

const StyledSwiper = styled(Swiper)`
  position: relative;
  width: 100%;
  background-color: none;
  & .swiper-pagination-bullet {
    width: 50px;
    height: 1px;
    border-radius: 0;
    justify-self: flex-end;
  }
  & .swiper-pagination-bullets {
    bottom: 8rem;
    z-index: -1;
  }

  & .swiper-pagination-bullet-active {
    background: var(--color-grey-900);
  }
  & .swiper-button-prev {
    background-image: url('../../public/left.svg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-color: var(--color-grey-0);
    width: 50px;
    height: 20px;
    border: none;
    cursor: pointer;
  }
`;

function SwiperNav() {
  const swiper = useSwiper();
  return (
    <StyledSwiperNav>
      <ButtonLeft onClick={() => swiper.slidePrev()}></ButtonLeft>
      <ButtonRight onClick={() => swiper.slideNext()}></ButtonRight>
    </StyledSwiperNav>
  );
}

export { SwiperNav, StyledSwiper };
