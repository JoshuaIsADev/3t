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
      /* font-size: 10rem; */
      font-size: calc(100vw / 12);
      font-weight: 900;
      line-height: calc(100vw / 16);
      text-transform: uppercase;
      transform: translateX(-0.1rem);
      padding-bottom: 1rem;
      ${(props) => variations[props.$variation]}
    `}

  ${(props) =>
    props.as === 'h2' &&
    css`
      font-size: 7rem;
      font-weight: 900;
      line-height: 5rem;
      text-transform: uppercase;
      ${(props) => variations[props.$variation]}
    `}

  ${(props) =>
    props.as === 'h3' &&
    css`
      font-size: 1rem;
      font-weight: 600;
      line-height: 1rem;
      text-transform: uppercase;
      ${(props) => variations[props.$variation]}
    `}
    
    ${(props) =>
    props.as === 'h4' &&
    css`
      font-size: 2rem;
      font-weight: 900;
      line-height: 1.5rem;
      text-transform: uppercase;
      transform: translateX(-0.1rem);
      padding-bottom: 1rem;
      ${(props) => variations[props.$variation]}
    `}

  ${(props) =>
    props.as === 'h5' &&
    css`
      font-size: 1rem;
      font-weight: 600;
      line-height: 1rem;
      text-transform: uppercase;
      ${(props) => variations[props.$variation]}
    `}
`;

export default Heading;
