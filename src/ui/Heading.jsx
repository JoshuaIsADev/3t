import styled, { css } from 'styled-components';

const variations = {
  hero: css`
    color: var(--color-brand);
  `,
  cap: css`
    text-transform: uppercase;
  `,
};

const Heading = styled.h1`
  ${(props) =>
    props.as === 'h1' &&
    css`
      font-size: clamp(7rem, 100vw / 4, 32rem);
      font-weight: 900;
      /* line-height: clamp(7rem, 100vw / 6, 22rem); */
      line-height: 22rem;
      text-transform: uppercase;
      transform: translateX(-0.5rem);
      ${(props) => variations[props.$variation]};
      padding: 0;
      transform: translateY(-4rem);
    `}

  ${(props) =>
    props.as === 'h2' &&
    css`
      font-size: clamp(4rem, 100vw / 6, 15rem);
      font-weight: 800;
      line-height: clamp(3rem, 100vw / 11, 12rem);
      text-transform: uppercase;
      letter-spacing: -0.5rem;
      ${(props) => variations[props.$variation]}
      padding: 0;
    `}

    ${(props) =>
    props.as === 'h3' &&
    css`
      font-size: clamp(2rem, 100vw / 10, 10rem);
      font-weight: 900;
      line-height: clamp(0.75rem, 100vw / 18, 8rem);
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

  ${(props) =>
    props.as === 'h6' &&
    css`
      font-size: 3rem;
      font-weight: 800;
      line-height: 1.8rem;
      padding: ${(props) => props.$padding || '0'};
      ${(props) => variations[props.$variation]}
    `}

  ${(props) =>
    props.as === 'h7' &&
    css`
      font-size: 3rem;
      font-weight: 500;
      line-height: 1.8rem;
      padding: ${(props) => props.$padding || '0'};
    `}
`;

export default Heading;
