import styled from 'styled-components';
import Heading from './Heading';
import Row from './Row';
import Column from './Column';

const StyledHero = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: var(--width-max);
  margin: 0 auto;
`;

const HeroBackground = styled.img`
  width: 100%;
  height: 80vh;
  object-fit: cover;
  object-position: bottom;
`;

function Hero({ background, altHero, heading, subHeading, paragraphs }) {
  return (
    <StyledHero>
      <HeroBackground src={background} alt={altHero}></HeroBackground>
      <Row>
        <Column>
          <Heading as='h1'>{heading}</Heading>
        </Column>
      </Row>
      <Row>
        {paragraphs.map((paragraph, i) => (
          <Column key={Math.floor(Math.random() * 100)} $variation='paragraph'>
            <p>{paragraph}</p>
          </Column>
        ))}
      </Row>
      <Row>
        <Column>
          <Heading as='h2'>{subHeading}</Heading>
        </Column>
      </Row>
    </StyledHero>
  );
}

export default Hero;
