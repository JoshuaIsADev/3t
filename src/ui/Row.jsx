import styled from 'styled-components';

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  width: 100%;
  gap: 2rem;
  padding: 2rem;
  margin-bottom: 4rem;
  padding-left: calc(2rem + 400px);
`;

export default Row;
