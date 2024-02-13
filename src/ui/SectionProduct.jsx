import styled, { css } from 'styled-components';

const SectionProducts = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content min-content 1fr;
  width: var(--width-desktop);
  min-height: 100vh;
  padding: 4rem 0 0;
  overflow: hidden;
  border-bottom: 1px solid var(--color-grey-100);
`;

export default SectionProducts;
