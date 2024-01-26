import styled from 'styled-components';
import { motion } from 'framer-motion';
import HeroHeader from './HeroHeader';

const StyledHero = styled.section`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

const Video = styled(motion.video)`
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: -1;
`;

function Hero() {
  return (
    <StyledHero id='hero'>
      <HeroHeader
        heading={'Fast adventures'}
        subheading={'Explore new terrain without giving up speed or comfort'}
      />
      <Video
        animate={{ opacity: 100 }}
        initial={{ opacity: 0 }}
        transition={{ delay: 0, duration: 1 }}
        playsInline
        autoPlay
        muted
        loop
        src='/img/extrema_italia_small.webm'
        type='video/webm'
      />
    </StyledHero>
  );
}

export default Hero;
