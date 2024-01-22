import styled from 'styled-components';
import InfoCard from './InfoCard';
import { motion } from 'framer-motion';

const StyledHero = styled.section`
  width: 100vw;
  height: 100vh;
  /* background-image: url('/img/3t_strada_due_review_06.jpg');
  background-size: cover; */
  position: relative;
  z-index: 0;
  overflow: auto;
`;

const Video = styled(motion.video)`
  position: absolute;
  object-fit: cover;
  height: 100%;
  width: 100%;
  top: 0%;
  left: 0;
`;

function Hero() {
  return (
    <StyledHero>
      <Video
        animate={{ opacity: 100 }}
        initial={{ opacity: 0 }}
        transition={{ delay: 1, duration: 2 }}
        playsInline
        autoPlay
        muted
        loop
        src='/img/extrema_italia_small.webm'
        type='video/webm'
      />
      <InfoCard />
    </StyledHero>
  );
}

export default Hero;
