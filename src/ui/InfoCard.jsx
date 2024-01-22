import styled from 'styled-components';

const StyledInfoCard = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 50px;
  right: 150px;
  width: 400px;
  gap: 2rem;
  padding: 1.5rem;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
`;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`;

const StyledLi = styled.li`
  text-transform: uppercase;
  font-weight: 200;
  color: var(--color-grey-0);
`;

function InfoCard() {
  return (
    <StyledInfoCard>
      <ul>
        <StyledLi>Strada</StyledLi>
        <StyledLi>$3,499</StyledLi>
      </ul>
      <nav>
        <StyledUl>
          <StyledLi>Learn More</StyledLi>
          <StyledLi>Configure</StyledLi>
        </StyledUl>
      </nav>
    </StyledInfoCard>
  );
}

export default InfoCard;
