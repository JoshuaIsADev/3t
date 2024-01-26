import styled from 'styled-components';

const StyledBackground = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-image: url(${(props) => props.src});
  background-size: cover;
`;

const Background = ({ src }) => {
  return <StyledBackground src={src}></StyledBackground>;
};

export default Background;
