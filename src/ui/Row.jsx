import styled, { css } from 'styled-components';

const variations = {
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
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: ${(props) => props.$gridTemplateRows || '1fr'};
  width: 100%;
  gap: ${(props) => props.$gap || '1rem'};
  border-top: 1px solid var(--color-grey-100);
  padding: 0rem;
  ${(props) => variations[props.$variation]};
`;

export default Row;
