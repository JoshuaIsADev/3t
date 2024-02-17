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
      /* font-size: calc(100vw / 8); */
      font-size: clamp(7rem, 100vw / 6, 20rem);
      font-weight: 800;
      line-height: clamp(3rem, 100vw / 12, 18rem);
      text-transform: uppercase;
      transform: translateX(-0.5rem);
      ${(props) => variations[props.$variation]}
      padding: ${(props) => props.$padding || '0 0 3rem'};
    `}

  ${(props) =>
    props.as === 'h2' &&
    css`
      font-size: clamp(4rem, 100vw / 12, 8rem);
      font-weight: 800;
      line-height: clamp(3rem, 100vw / 16, 6rem);
      text-transform: uppercase;
      ${(props) => variations[props.$variation]}
      padding: ${(props) => props.$padding || '0'};
    `}

    ${(props) =>
    props.as === 'h3' &&
    css`
      font-size: clamp(2rem, 100vw / 16, 4rem);
      font-weight: 900;
      line-height: clamp(0.75rem, 100vw / 20, 3rem);
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
