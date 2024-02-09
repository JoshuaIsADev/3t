import styled, { css } from 'styled-components';

const variations = {
  headline: css`
    padding: 4rem 0 0;
  `,
};

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: var(--width-desktop);
  /* min-height: 100vh; */
  justify-content: center;
  padding: 4rem 0;
  ${(props) => variations[props.$variation]}
`;

export default Section;
