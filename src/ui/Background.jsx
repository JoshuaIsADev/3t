import styled from 'styled-components';

const StyledBackground = styled.div`
  /* width: 100vw;*/
  height: 100vh;
  top: 0;
  background-image: url(${(props) => props.src});
  background-size: cover;
  z-index: -1;
`;

const Background = ({ src }) => {
  return <StyledBackground src={src}></StyledBackground>;
};

export default Background;
