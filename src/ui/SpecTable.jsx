import styled from 'styled-components';

const SpecContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
`;

const SpecColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const SpecText = styled.p`
  display: block;
`;

export { SpecContainer, SpecColumn, SpecText };
