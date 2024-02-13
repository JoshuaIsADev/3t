import styled from 'styled-components';
import { useSwiper } from 'swiper/react';

const ButtonLeft = styled.button`
  background-image: url('../../public/arrow.svg');
  transform: rotate(180deg);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: rgba(var(--color-grey-0), 0);
  width: 50px;
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
  width: 50px;
  height: 31px;
  border: none;
  cursor: pointer;
`;

const StyledSwiperNav = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  z-index: 1;
  width: 100%;
  padding: 0 1rem;
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

export default SwiperNav;
