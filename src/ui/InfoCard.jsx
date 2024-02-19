import styled from 'styled-components';
import Heading from './Heading';

const StyledInfoCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.5rem 1rem;
`;

// const StyledSpecCard = styled.div`
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   grid-template-rows: 1fr;
//   height: 100%;
// `;

// const SpecColumn = styled.div`
//   grid-column: span 1;
//   height: 100%;
//   justify-content: space-between;
// `;

function InfoCard({ heading, paragraph }) {
  return (
    <StyledInfoCard>
      <Heading as='h3'>{heading}</Heading>
      <p>{paragraph}</p>
    </StyledInfoCard>
  );
}

export default InfoCard;
