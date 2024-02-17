import styled from 'styled-components';
import Heading from './Heading';

const StyledTextCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.5rem 1rem;
`;

function TextCard({ heading, paragraph }) {
  return (
    <StyledTextCard>
      <Heading as='h3'>{heading}</Heading>
      <p>{paragraph}</p>
    </StyledTextCard>
  );
}

export default TextCard;
