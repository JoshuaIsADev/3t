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
      font-size: 19rem;
      font-weight: 900;
      line-height: 18rem;
      letter-spacing: -0.5rem;
      text-transform: uppercase;
      ${(props) => variations[props.$variation]};
      padding: 0 0 2rem;
      transform: translateX(-1.2rem);
    `}

  ${(props) =>
    props.as === 'h2' &&
    css`
      font-size: 7rem;
      font-weight: 800;
      line-height: 7rem;
      text-transform: uppercase;
      letter-spacing: -0.5rem;
      ${(props) => variations[props.$variation]}
      padding-bottom: 0;
    `}

    ${(props) =>
    props.as === 'h3' &&
    css`
      font-size: 4rem;
      font-weight: 900;
      text-transform: uppercase;
      transform: translateX(-0.1rem);
      padding: ${(props) => props.$padding || '0'};
    `}

  ${(props) =>
    props.as === 'h4' &&
    css`
      font-size: 1.25rem;
      font-weight: 800;
      line-height: 1.25rem;
      ${(props) => variations[props.$variation]}
      padding: ${(props) => props.$padding || '0'};
    `}

${(props) =>
    props.as === 'h5' &&
    css`
      font-size: 0.875rem;
      font-weight: 800;
      line-height: 1rem;
      text-transform: uppercase;
      ${(props) => variations[props.$variation]}
      padding: ${(props) => props.$padding || '0'};
    `}
${(props) =>
    props.as === 'h6' &&
    css`
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1rem;

      ${(props) => variations[props.$variation]}
      padding: ${(props) => props.$padding || '0'};
    `}
`;

export default Heading;
