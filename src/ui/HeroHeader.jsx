import styled from 'styled-components';
import Heading from './Heading';

const HeroHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  height: 100vh;
  padding: 2rem;
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
