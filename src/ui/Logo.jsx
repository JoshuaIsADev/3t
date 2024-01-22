import styled from 'styled-components';

const Img = styled.img`
  width: 60px;
  object-fit: contain;
`;

function Logo() {
  return <Img src='/3tlogored.png' alt='logo' />;
}

export default Logo;
