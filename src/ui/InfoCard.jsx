import styled from 'styled-components';

const StyledInfoCard = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 50px;
  right: 0;
  width: 300px;
  background-color: var(--brand-color);
  gap: 2rem;
  padding: 0.5rem;
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
