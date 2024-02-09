import styled, { css } from 'styled-components';
import Heading from './Heading';
import StyledLink from './StyledLink';

const variations = {
  feature: css`
    position: absolute;
  `,
  product: css`
    position: fixed;
  `,
};

const HeroHeadingContainer = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
  position: absolute;
  height: 100vh;
  padding: 4rem;
  width: var(--width-desktop);
  z-index: 1;
  ${(props) => variations[props.$variation]}
`;

// const LinkContainer = styled.nav`
//   display: flex;
//   width: 100%;
//   max-width: 300px;
//   padding-top: 2rem;
// `;

const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
`;

function HeroHeading({ heading, subHeading, link, variation }) {
  return (
    <HeroHeadingContainer $variation={variation}>
      <Heading as='h1' $variation='hero'>
        {heading}
      </Heading>
      <Heading as='h2' $variation='hero'>
        {subHeading}
      </Heading>
      {link ? (
        <Ul>
          <li>
            <StyledLink to={`/${link}`} $variation='hero'>
              Learn more
            </StyledLink>
          </li>
        </Ul>
      ) : (
        ''
      )}
    </HeroHeadingContainer>
  );
}

export default HeroHeading;
