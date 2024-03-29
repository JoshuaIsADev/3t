import styled, { css } from 'styled-components';

const variations = {
  details: css`
    width: 100vw;
  `,

  footer: css`
    gap: 2rem;
  `,

  form: css`
    gap: 1rem;
    width: 100%;
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
  position: relative;
  ${(props) => variations[props.$variation]};
`;

export default Column;
