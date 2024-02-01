import styled, { css } from 'styled-components';

const variations = {
  product: css`
    gap: 6rem;
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
  grid-template-rows: 1fr;
  width: 100%;
  gap: 2rem;
  margin-bottom: 4rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: calc(2rem + 400px);
  padding-right: calc(2rem + 140px);
  ${(props) => variations[props.$variation]}
`;

export default Row;
