import styled, { css } from 'styled-components';

const variations = {
  twoColumns: css`
    grid-column: span 2;
  `,

  threeColumns: css`
    grid-column: span 3;
  `,

  fourColumns: css`
    grid-column: span 4;
  `,
};

const Column = styled.div`
  justify-self: stretch;
  ${(props) => variations[props.$variation]}
`;

export default Column;
