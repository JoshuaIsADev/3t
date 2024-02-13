import styled from 'styled-components';
import Heading from './Heading';

const StyledHeadingContainer = styled.header`
  padding: 0.5rem 1rem;
`;

function HeadingContainer({ heading }) {
  return (
    <StyledHeadingContainer>
      <Heading as='h2' $variation='hero'>
        {heading}
      </Heading>
    </StyledHeadingContainer>
  );
}

export default HeadingContainer;
