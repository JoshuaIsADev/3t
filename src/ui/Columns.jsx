import styled, { css } from 'styled-components';

const variations = {
  highlight: css`
    background-color: var(--color-brand);
  `,

  images: css`
    padding: 0;
  `,
};

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  border-right: 1px solid var(--color-line);
  ${(props) => variations[props.$variation]}
`;

const Column1 = styled(Column)`
  grid-column: 1 / span 1;
  grid-row: 1 / span 1;
`;

const Column2 = styled(Column)`
  grid-column: 2 / span 1;
  grid-row: 1 / span 1;
`;

const Column3 = styled(Column)`
  grid-column: 3 / span 1;
  grid-row: 1 / span 1;
`;

const Column4 = styled(Column)`
  grid-column: 4 / span 1;
  grid-row: 1 / span 1;
  ${(props) => variations[props.$variation]}
`;

export { Column, Column1, Column2, Column3, Column4 };
