import styled, { css } from 'styled-components';

const variations = {
  single: css`
    grid-template-columns: 1fr;
  `,
};

const ArticleContainer = styled.article`
  grid-row: 3 / span 1;
  padding: 0rem;
  display: grid;
  grid-template-rows: ${(props) => props.$row};
  grid-template-columns: ${(props) => props.$col};
  /* ${(props) => variations[props.$variation]}; */
`;

export default ArticleContainer;
