import styled from 'styled-components';
import { Swiper, useSwiper } from 'swiper/react';

const ButtonLeft = styled.button`
  background-image: url('../../public/arrow.svg');
  transform: rotate(180deg);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: rgba(var(--color-grey-0), 0);
  width: 100px;
  height: 31px;
  border: none;
  cursor: pointer;
`;

const ButtonRight = styled.button`
  background-image: url('../../public/arrow.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: rgba(var(--color-grey-0), 0);
  width: 100px;
  height: 31px;
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
  padding: 0 1rem;
`;

const StyledSwiper = styled(Swiper)`
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
    bottom: 2rem;
    z-index: 2;
  }

  & .swiper-pagination-bullet-active {
    background: var(--color-grey-900);
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
