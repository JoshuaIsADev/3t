import styled, { css } from 'styled-components';

const variations = {
  highlight: css`
    transform: translateX(${(props) => props.$translate || '0'});
    width: ${(props) => props.$width};
    aspect-ratio: ${(props) => props.$ratio || '6/3.9'};
    margin: ${(props) => props.$margin || '0 0'};
  `,
};

const Img = styled.img`
  width: 100%;
  object-fit: cover;
  margin-bottom: 1rem;
  ${(props) => variations[props.$variation]}
  aspect-ratio: ${(props) => props.$ratio || '6/3.9'}
`;

export default Img;
