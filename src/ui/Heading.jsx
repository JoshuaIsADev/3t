import styled, { css } from 'styled-components';

const Heading = styled.h1`
  ${(props) =>
    props.as === 'h1' &&
    css`
      font-size: 12rem;
      font-weight: 500;
      text-transform: uppercase;
      white-space: nowrap;
    `}
  ${(props) =>
    props.as === 'h2' &&
    css`
      font-size: 1.5rem;
      font-weight: 200;
    `}
`;

export default Heading;
