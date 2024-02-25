import styled, { css } from 'styled-components';

const variations = {
  footer: css`
    justify-content: space-between;
    padding: 10rem 2rem 2rem;
  `,
};

const Section = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  max-width: var(--width-max);
  margin: 0 auto;
  padding: 6rem 2rem 6rem;
  background-image: url(${(props) => props.$background});
  background-size: cover;
  ${(props) => variations[props.$variation]}
`;

export default Section;
