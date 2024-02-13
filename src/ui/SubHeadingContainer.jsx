import styled from 'styled-components';

const StyledSubHeadingContainer = styled.article`
  grid-row: 2 / span 1;
  grid-column: span 4;
  padding: 0.5rem 1rem;
`;

function SubHeadingContainer({ subHeading }) {
  return (
    <StyledSubHeadingContainer>
      <p>{subHeading}</p>
    </StyledSubHeadingContainer>
  );
}

export default SubHeadingContainer;
