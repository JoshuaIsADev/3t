import Column from './Column';
import Heading from './Heading';
import Row from './Row';

function SectionHeading({ heading }) {
  return (
    <Row>
      <Column $gridColumn='1 / span 2'>
        <Heading as='h2'>{heading}</Heading>
      </Column>
    </Row>
  );
}

export default SectionHeading;
