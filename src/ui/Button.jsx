import styled, { css } from 'styled-components';
// import right from '../../public/right.svg';

const variations = {
  details: css`
    border: none;
    background-color: var(--color-grey-0);
    width: 2rem;
    height: 0.5rem;
  `,

  newsletter: css`
    background-color: var(--color-grey-900);
    color: var(--color-grey-0);
    padding: 0;
    font-size: 1rem;
    text-transform: uppercase;
    border: none;
    border-radius: 10rem;
    aspect-ratio: 1/1;
    height: 10rem;
  `,

  active: css`
    background-color: var(--color-grey-900);
  `,

  configure: css`
    background-color: var(--color-grey-0);
    border: 1px solid var(--color-grey-900);
    border-radius: 2rem;
    color: var(--color-grey-900);
    font-size: 1.5rem;
    font-weight: 100;
    text-decoration: none;
    padding: 0.5rem 2rem;
    width: 200px;
    &:hover,
    &:active,
    &.active:link,
    &.active:visited {
      border-radius: 0.3rem;
      transition: 0.2s ease;
    }
  `,
};

const ButtonGallery = styled.button`
  position: relative;
  content: '';
  width: 3rem;
  height: 0.8rem;
  border: 6px solid var(--color-grey-0);
  border-left: none;
  border-right: none;
  background-color: var(--color-grey-200);
  cursor: pointer;
  margin-right: 0.5rem;
  ${(props) => variations[props.$variation]};
`;

const Button = styled.button`
  cursor: pointer;
  ${(props) => variations[props.$variation]};
`;

export { Button, ButtonGallery };
