import styled, { css } from 'styled-components';

const variations = {
  details: css`
    width: 100vw;
  `,

  highlight: css`
    max-width: 600px;
    gap: 2rem;
  `,

  heading: css`
    max-width: var(--width-main);
  `,

  paragraph: css`
    max-width: var(--width-main);
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
  ${(props) => variations[props.$variation]};
`;

export default Column;
