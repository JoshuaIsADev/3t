import styled from 'styled-components';
import Heading from './Heading';

const StyledHeadingContainer = styled.header`
  padding: 0.5rem 1rem;
`;

const StyledSubHeadingContainer = styled.article`
  grid-row: 2 / span 1;
  grid-column: span 4;
  padding: 0.5rem 1rem;
`;

function HeadingContainer({ heading, subHeading }) {
  return (
    <>
      <StyledHeadingContainer>
        <Heading as='h2' $variation='hero'>
          {heading}
        </Heading>
      </StyledHeadingContainer>
      <StyledSubHeadingContainer>
        <p>{subHeading}</p>
      </StyledSubHeadingContainer>
    </>
  );
}

export default HeadingContainer;
