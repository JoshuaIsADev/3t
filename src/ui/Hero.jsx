import Heading from './Heading';
import HeroTicker from './HeroTicker';
import styled from 'styled-components';

const SectionHero = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: var(--width-max);
  margin: 0 auto;
  padding: 6rem var(--padding-sides) 0;
`;

const HeadingContainer = styled.div`
  width: 100%;
  padding-bottom: 0rem;
`;

const SubheadingContainer = styled.div`
  width: 100%;
  max-width: var(--width-text-max);
  padding-bottom: 2rem;
`;

const ImgContainer = styled.div`
  width: 100%;
`;

const Img = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: left;
  border-radius: 2rem;
`;

function Hero({ image, heading, subHeading, tickerText }) {
  return (
    <SectionHero>
      <HeadingContainer>
        <Heading as='h1'>{heading}</Heading>
      </HeadingContainer>
      <SubheadingContainer>
        <Heading as='h4'>{subHeading}</Heading>
      </SubheadingContainer>
      <ImgContainer>
        <Img src={image}></Img>
      </ImgContainer>
    </SectionHero>
    // <Section $background={background}>
    //   <Row $variation='heading' $paddingBottom='0'>
    //     <Heading as='h1'>{heading}</Heading>
    //   </Row>
    //   <Row>
    //     <Heading as='h4'>{subHeading}</Heading>
    //   </Row>
    //   <HeroTicker text={tickerText} />
    // </Section>
  );
}

export default Hero;
