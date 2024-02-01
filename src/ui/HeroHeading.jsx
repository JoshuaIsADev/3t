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
  justify-content: flex-start;
  position: absolute;
  height: 100vh;
  width: 400px;
  padding: 40vh 2rem;
  z-index: 0;
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

function HeroHeading({ color, heading, subheading, link, variation }) {
  return (
    <HeroHeadingContainer $variation={variation}>
      <Heading as='h4' $variation={color}>
        {heading}
      </Heading>
      <Heading as='h5' $variation={color}>
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
