import styled from 'styled-components';

const StyledTicker = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  border-radius: 2rem;
  background-color: var(--color-grey-900);
  color: var(--color-grey-0);
  padding: 0 2rem 0.5rem;
`;

function Ticker({ text }) {
  return (
    <StyledTicker>
      <p>{text}</p>
    </StyledTicker>
  );
}

export default Ticker;
