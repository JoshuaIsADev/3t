import styled from 'styled-components';
import Heading from './Heading';
// import { Link } from 'react-router-dom';
import StyledLink from './StyledLink';

const HeroHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: absolute;
  height: 100vh;
  padding: 30rem 2rem 0;
  z-index: 1;
`;

const LinkContainer = styled.nav`
  display: flex;
  width: 100%;
  max-width: 300px;
  padding-top: 2rem;
`;

const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
`;

function HeroHeader({ color, heading, subheading, productLink, link }) {
  console.log(productLink);
  return (
    <HeroHeaderContainer>
      <Heading as='h1' $variation={color}>
        {heading}
      </Heading>
      <Heading as='h2' $variation={color}>
        {subheading}
      </Heading>
      {productLink ? (
        <LinkContainer>
          <Ul>
            <li>
              <StyledLink to={`/${productLink}`}>Learn more</StyledLink>
            </li>
          </Ul>
        </LinkContainer>
      ) : (
        ''
      )}
    </HeroHeaderContainer>
  );
}

export default HeroHeader;
