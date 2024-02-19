import styled, { css } from 'styled-components';

const variations = {
  paragraph: css`
    max-width: 400px;
    align-items: center;
    text-align: center;
  `,
};

const Column = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  ${(props) => variations[props.$variation]};
`;

export default Column;
