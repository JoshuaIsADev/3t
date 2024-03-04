import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

const variations = {
  hero: css`
    color: var(--color-brand);
  `,

  header: css`
    font-size: 2rem;
    font-weight: 400;
    border: 1px solid var(--color-grey-900);
    border-radius: 4rem;
    padding: 0.25rem 2rem 0.75rem;
    &:hover,
    &:active,
    &.active:link,
    &.active:visited {
      color: var(--color-grey-300);
      border: 1px solid var(--color-grey-300);
    }
  `,

  underline: css`
    font-size: 1rem;
    font-weight: 600;
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 0.3rem;
  `,
};

const StyledLink = styled(NavLink)`
  &:link,
  &:visited {
    color: var(--color-grey-900);
    ${(props) => variations[props.$variation]}
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-900);
  }
`;

export default StyledLink;
