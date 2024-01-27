import { motion } from 'framer-motion';
import styled from 'styled-components';

const Video = styled(motion.video)`
  /* position: absolute; */
  object-fit: cover;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: -1;
`;

export default Video;
