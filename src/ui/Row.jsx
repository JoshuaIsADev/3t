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
  grid-template-rows: 1fr;
  width: 100%;
  gap: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  ${(props) => variations[props.$variation]}
`;

export default Row;
