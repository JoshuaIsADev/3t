import styled from 'styled-components';
import { motion } from 'framer-motion';

const Img = styled(motion.img)`
  width: 60px;
  object-fit: contain;
`;

function Logo() {
  return (
    <Img
      animate={{ opacity: 100 }}
      initial={{ opacity: 0 }}
      transition={{ delay: 2, duration: 1 }}
      src='/3tlogored.png'
      alt='logo'
    />
  );
}

export default Logo;
