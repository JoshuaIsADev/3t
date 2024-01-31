import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  &:link,
  &:visited {
    font-size: 1rem;
    text-transform: uppercase;
    text-decoration: underline;
    font-weight: 600;
    text-decoration-thickness: 2px;
    text-underline-offset: 0.2rem;
    color: var(--color-grey-900);
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-900);
  }
`;

export default StyledLink;