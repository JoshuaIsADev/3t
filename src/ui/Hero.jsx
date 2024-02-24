import { v4 as uuidv4 } from 'uuid';
import Heading from './Heading';
import Row from './Row';
import Column from './Column';
import Section from './Section';
import Ticker from './Ticker';

function Hero({ background, heading, subHeading, tickerText }) {
  return (
    <Section $background={background}>
      <Row $variation='heading' $paddingBottom='0'>
        <Heading as='h1'>{heading}</Heading>
      </Row>
      <Row>
        <Heading as='h4'>{subHeading}</Heading>
      </Row>
      <Ticker text={tickerText} />
    </Section>
  );
}

export default Hero;
