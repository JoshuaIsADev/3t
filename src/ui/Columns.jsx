import styled, { css } from 'styled-components';

const variations = {
  highlight: css`
    background-color: var(--color-brand);
  `,

  borderless: css`
    border-right: none;
  `,

  image: css`
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

const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  border-right: 1px solid var(--color-line);
  ${(props) => variations[props.$variation]}
  grid-column: ${(props) => props.$col} / span ${(props) => props.$span};
`;

export { Col, Column };
