import styled, { css } from 'styled-components';

const variations = {
  hero: css`
    color: var(--color-brand);
  `,
};

const Heading = styled.h1`
  ${(props) =>
    props.as === 'h1' &&
    css`
      /* font-size: 10rem; */
      font-size: calc(100vw / 8);
      font-weight: 800;
      line-height: calc(100vw / 30);
      text-transform: uppercase;
      transform: translateX(-0.5rem);
      ${(props) => variations[props.$variation]}
      padding: ${(props) => props.$padding || '0 0 3rem'};
    `}

  ${(props) =>
    props.as === 'h2' &&
    css`
      font-size: 6rem;
      font-weight: 800;
      line-height: 5.5rem;
      text-transform: uppercase;
      ${(props) => variations[props.$variation]}
      padding: ${(props) => props.$padding || '0'};
    `}

    ${(props) =>
    props.as === 'h3' &&
    css`
      font-size: 3rem;
      font-weight: 900;
      line-height: 1.5rem;
      text-transform: uppercase;
      transform: translateX(-0.1rem);
      padding: ${(props) => props.$padding || '0'};
    `}

  ${(props) =>
    props.as === 'h4' &&
    css`
      font-size: 1rem;
      font-weight: 600;
      line-height: 1rem;
      text-transform: uppercase;
      ${(props) => variations[props.$variation]}
      padding: ${(props) => props.$padding || '0'};
    `}
    
  ${(props) =>
    props.as === 'h5' &&
    css`
      font-size: 1rem;
      font-weight: 600;
      line-height: 1rem;
      text-transform: uppercase;
      padding: ${(props) => props.$padding || '0'};
    `}
`;

export default Heading;
