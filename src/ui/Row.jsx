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
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  gap: 1rem;
  flex-wrap: nowrap;
  ${(props) => variations[props.$variation]};
`;

export default Row;
