import styled from 'styled-components';
// import InfoCard from './InfoCard';
import { motion } from 'framer-motion';
// import HeroScrollText from './HeroScrollText';

const StyledHero = styled.section`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  position: relative;
  z-index: 0;
`;

const Video = styled(motion.video)`
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 100vh;
  top: 0%;
  left: 0;
  z-index: 0;
`;

function Hero() {
  return (
    <StyledHero>
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
      {/* <InfoCard /> */}

      {/* <HeroScrollText /> */}
    </StyledHero>
  );
}

export default Hero;
