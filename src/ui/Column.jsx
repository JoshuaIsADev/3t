import styled, { css } from 'styled-components';

const variations = {
  highlight: css`
    max-width: 600px;
    align-items: center;
    text-align: center;
    gap: 2rem;
  `,
  paragraph: css`
    max-width: 400px;
    align-items: center;
    text-align: center;
  `,
  left: css`
    width: 100%;
    align-items: flex-start;
    text-align: left;
  `,
  right: css`
    width: 100%;
    align-items: flex-end;
    text-align: right;
  `,
};

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  text-align: center;
  ${(props) => variations[props.$variation]};
`;

export default Column;
