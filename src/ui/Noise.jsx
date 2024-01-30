import styled from 'styled-components';

const Noise = styled.div`
  height: 100vh;
  width: 100vw;
  top: 0;
  background-image: url('/img/noise.jpg');
  background-repeat: repeat;
  mix-blend-mode: multiply;
  opacity: 0.7;
  position: fixed;
  z-index: 10;
  pointer-events: none;
`;

export default Noise;
