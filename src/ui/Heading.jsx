import styled, { css } from 'styled-components';

const variations = {
  white: css`
    color: var(--color-grey-0);
  `,
};

const Heading = styled.h1`
  ${(props) =>
    props.as === 'h1' &&
    css`
      font-size: 3rem;
      font-weight: 500;
      line-height: 3rem;
      text-transform: uppercase;
      transform: translateX(-0.1rem);
      ${(props) => variations[props.$variation]}
    `}
  ${(props) =>
    props.as === 'h2' &&
    css`
      font-size: 1.2rem;
      font-weight: 600;
      line-height: 2rem;
      text-transform: uppercase;
      ${(props) => variations[props.$variation]}
    `}
`;

export default Heading;
