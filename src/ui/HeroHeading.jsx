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

const HeroHeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: absolute;
  height: 100vh;
  padding: 4rem 1rem;
  width: var(--width-desktop);
  z-index: 1;
  ${(props) => variations[props.$variation]}
`;

const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
`;

function HeroHeading({ heading, subHeading, link }) {
  return (
    <HeroHeadingContainer>
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
