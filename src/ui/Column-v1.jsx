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

  center: css`
    justify-content: center;
    align-items: center;
    text-align: center;
  `,
};

const Column = styled.div`
  justify-self: stretch;
  align-self: ${(props) => props.$align || 'auto'};
  padding: ${(props) => props.$padding || '.5rem'};
  ${(props) => variations[props.$variation]};
  grid-column: ${(props) => props.$gridColumn || ''};
  border-left: ${(props) => props.$borderLeft || 'none'};
  background-color: ${(props) => props.$backgroundColor || 'none'};
`;

export default Column;
