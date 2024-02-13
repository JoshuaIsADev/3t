import styled, { css } from 'styled-components';

const variations = {
  headline: css`
    padding: 0rem 0 0;
  `,
};

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: var(--width-desktop);
  min-height: 100vh;
  padding: 0rem 0rem;
  ${(props) => variations[props.$variation]}
`;

export default Section;
