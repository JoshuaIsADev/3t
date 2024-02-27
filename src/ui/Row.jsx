import styled, { css } from 'styled-components';

const variations = {
  heading: css`
    padding-bottom: ${(props) => props.$paddingBottom || '6rem'};
    padding-right: var(--padding-row);
  `,

  paragraph: css`
    padding-left: var(--padding-row);
    padding-right: var(--padding-row);
    padding-bottom: 6rem;
  `,

  footer: css`
    gap: 8rem;
  `,

  right: css`
    padding-left: var(--padding-row);
    position: relative;
  `,

  left: css`
    padding-right: var(--padding-row);
    position: relative;
  `,

  bottom: css`
    align-items: flex-end;
  `,

  noPadding: css`
    padding-left: 0rem;
    padding-right: 0rem;
  `,

  smallPadding: css`
    padding-top: 0rem;
    padding-bottom: 0rem;
    margin-bottom: 0rem;
  `,
};

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: nowrap;
  gap: 1rem;
  position: relative;
  ${(props) => variations[props.$variation]};
`;

export default Row;
