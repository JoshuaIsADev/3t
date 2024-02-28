import styled from 'styled-components';
import { useSwiper } from 'swiper/react';

const ButtonLeft = styled.button`
  background-image: url('../../public/arrow.svg');
  transform: rotate(180deg);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: rgba(var(--color-grey-0), 0);
  width: 25px;
  height: 25px;
  border: none;
  cursor: pointer;
`;

const ButtonRight = styled.button`
  background-image: url('../../public/arrow.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: rgba(var(--color-grey-0), 0);
  width: 25px;
  height: 25px;
  border: none;
  cursor: pointer;
`;

const StyledSwiperNav = styled.div`
  display: flex;
  position: absolute;
  justify-content: left;
  gap: 2rem;
  top: 0rem;
  left: var(--padding-sides);
  width: 100%;
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
