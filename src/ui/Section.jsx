import styled, { css } from 'styled-components';

const variations = {
  grey: css`
    background-color: var(--background-color-grey);
  `,
};

const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content min-content 1fr;
  width: var(--width-desktop);
  min-height: 100vh;
  padding: 0rem 0 0;
  overflow: hidden;
  ${(props) => variations[props.$variation]};
  > * {
    border-bottom: 1px solid var(--color-line);
  }
  @media (max-aspect-ratio: 3/2) {
    min-height: 40vh;
  }
`;

export default Section;
