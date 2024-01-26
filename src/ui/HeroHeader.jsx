import styled from 'styled-components';
import Heading from './Heading';

const HeroHeaderContainer = styled.div`
  position: absolute;
  /* height: 100vh; */
  bottom: 2rem;
  left: 2rem;
`;

function HeroHeader({ heading, subheading }) {
  return (
    <HeroHeaderContainer>
      <Heading as='h2'>{subheading}</Heading>
      <Heading as='h1'>{heading}</Heading>
    </HeroHeaderContainer>
  );
}

export default HeroHeader;
