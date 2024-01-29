import styled from 'styled-components';
import Heading from './Heading';
import StyledLink from './StyledLink';

const HeroHeadingContainer = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: absolute;
  height: 100vh;
  width: 400px;
  padding: 40vh 2rem;
  z-index: 0;
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

function HeroHeading({ color, heading, subheading, link }) {
  return (
    <HeroHeadingContainer>
      <Heading as='h1' $variation={color}>
        {heading}
      </Heading>
      <Heading as='h2' $variation={color}>
        {subheading}
      </Heading>
      {link ? (
        <Ul>
          <li>
            <StyledLink to={`/${link}`}>Learn more</StyledLink>
          </li>
        </Ul>
      ) : (
        ''
      )}
    </HeroHeadingContainer>
  );
}

export default HeroHeading;
