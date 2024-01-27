import styled from 'styled-components';
import Heading from './Heading';

const HeroHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: fixed;
  height: 100vh;
  padding: 1.8rem 8rem;
  z-index: 1;
`;

function HeroHeader({ color, heading, subheading }) {
  return (
    <HeroHeaderContainer>
      <Heading as='h1' $variation={color}>
        {heading}
      </Heading>
      <Heading as='h2' $variation={color}>
        {subheading}
      </Heading>
    </HeroHeaderContainer>
  );
}

export default HeroHeader;
