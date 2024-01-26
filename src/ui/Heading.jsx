import styled, { css } from 'styled-components';

const Heading = styled.h1`
  ${(props) =>
    props.as === 'h1' &&
    css`
      font-size: 8rem;
      font-weight: 500;
      line-height: 8rem;
      text-transform: uppercase;
      transform: translateX(-0.4rem);
    `}
  ${(props) =>
    props.as === 'h2' &&
    css`
      font-size: 1.75rem;
      font-weight: 600;
      line-height: 0rem;
      text-transform: uppercase;
    `}
`;

export default Heading;
