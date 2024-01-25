// 'use client';

import styled from 'styled-components';
import HeroRevealText from './HeroRevealText';
import { motion, useScroll, useTransform } from 'framer-motion';
// import { useRef } from 'react';

// const fadeInAnimationVariants = {
//   initial: {
//     scale: 1,
//   },
//   animate: {
//     scale: 1.2,
//   },
// };

const StyledProductHero = styled.section`
  display: flex;
  flex-direction: column;
  /* width: 100vw; */
  height: 100vh;
  margin-top: 150vh;
  /* margin-bottom: 10vh; */
  /* padding: 0 4rem 0rem 1rem;
  background-image: url('/img/strada01.jpg');
  background-size: cover;
  background-position: center;
  position: relative; */
  /* position: relative; */
  position: sticky;
  top: 0;
  z-index: 0;
`;

const ProductHeroBackground = styled(motion.div)`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-image: url('/img/section-02.jpg');
  background-size: cover;
  background-position: center;
  z-index: 0;
  position: absolute;
`;

function ProductHero2() {
  const { scrollYProgress } = useScroll({
    // target: '',
    // offset: ['0 1', '.9 1'],
  });
  const scaleProgress = useTransform(scrollYProgress, [0.2, 0.8], [0.3, 1]);

  return (
    <>
      <StyledProductHero id='strada2'>
        <HeroRevealText />;
        <ProductHeroBackground
          style={{
            scale: scaleProgress,
          }}
        />
      </StyledProductHero>
    </>
  );
}

export default ProductHero2;
