import styled, { css } from 'styled-components';

const variations = {
  noise: css`
    /* mix-blend-mode: multiply; */
    /* background-image: url('/img/noiseb.jpg');
    background-repeat: repeat; */
  `,
};

const StyledBackground = styled.div`
  /* width: 100vw;*/
  height: 100vh;
  top: 0;
  background-image: url(${(props) => props.src});
  background-size: cover;
  z-index: -1;
  ${(props) => variations[props.$variation]}
`;

const Background = ({ src }) => {
  return <StyledBackground src={src}></StyledBackground>;
};

export default Background;
