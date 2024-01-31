import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

const variations = {
  halfFeature: css`
    width: 100%;
    height: auto;
  `,
};

const Video = styled(motion.video)`
  position: relative;
  object-fit: cover;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: -1;
  ${(props) => variations[props.$variation]}
`;

export default Video;
