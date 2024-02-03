import styled, { css } from 'styled-components';

const variations = {
  active: css`
    background-color: var(--color-grey-900);
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
  border: none;
  cursor: pointer;
  background-color: var(--brand-color);
  color: var(--color-grey-0);
  font-size: 1.5rem;
  font-weight: 100;
  position: relative;
  top: -0.2rem;
`;

export { Button, ButtonGallery };
